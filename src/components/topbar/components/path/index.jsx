import { useMemo, useState } from "react";
import { ArrowBackIcon, HomeIcon } from "../../../../assets/icons";
import session from "../../../../data/session";
import "./index.sass";
import useDirectoryTools from "../../../../utils/directory";
import { Link, useNavigate } from "react-router-dom";

export default function Path () {
    const { item: { parent, id }, realm, getItem, updated } = session(s => s);
    const [ parentName, setParentName ] = useState("");
    useMemo(() => { parent && getItem(parent).then(x => setParentName(x.title)) }, [id])
    const { droppable } = useDirectoryTools()
    const navigate = useNavigate()

    if (updated) return (<button
        className={"Path" + (!parent ? " path-home" : "")}
        {...droppable(parent ? parent : "false")}
        onClick={() => !parent ? navigate(`/${realm.id}`) : navigate(`/${parent}`)}
    >
        {parent ? <>
            <ArrowBackIcon />
            <p>{parentName}</p>
        </> : <>
            <HomeIcon />
            <p></p>
        </>
        }
    </button>)
}

