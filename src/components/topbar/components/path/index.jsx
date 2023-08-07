import { ArrowBackIcon, HomeIcon } from "../../../../assets/icons";
import session from "../../../../data/session";
import "./index.sass";

export default function Path () {
    const { item: { parent }, getItem, setItem, } = session(s => s);
    return (
        <button 
        className={"Path" + (!parent ? " path-home" : "")}
        onClick={() => !parent ? setItem(null) : setItem(parent)}
        >
            {parent ? <>
                <ArrowBackIcon />
                <p>{getItem(parent).title}</p>
                </> :
                <HomeIcon/>
            }
        </button>
    )
}