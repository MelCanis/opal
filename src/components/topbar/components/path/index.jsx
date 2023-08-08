import { useMemo, useState } from "react";
import { ArrowBackIcon, HomeIcon } from "../../../../assets/icons";
import session from "../../../../data/session";
import "./index.sass";

export default function Path () {
    const { item: { parent, id }, getItem, setItem, } = session(s => s);
    const [ parentName, setParentName ] = useState("");
    useMemo(() => { parent && getItem(parent).then(x => setParentName(x.title)) }, [id])
    return (
        <button 
        className={"Path" + (!parent ? " path-home" : "")}
        onClick={() => !parent ? setItem(null) : setItem(parent)}
        >
            {parent ? <>
                <ArrowBackIcon />
                <p>{parentName}</p>
                </> :
                <HomeIcon/>
            }
        </button>
    )
}