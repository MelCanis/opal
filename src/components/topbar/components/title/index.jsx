import { useEffect, useRef, useState } from "react";
import session from "../../../../data/session";
import "./index.sass";

export default function Title () {
    const { item: { title, id }, changeItem } = session(s => s);
    const [defaultValue, setDefaultValue] = useState(title);
    const spanRef = useRef();
    useEffect(() => { setDefaultValue(title); spanRef.current.textContent = title;}, [id]);
    return (
        <span
        type="text"
        className={"Title" + (title.length == "" ? " title-untitled": "")}
        contentEditable="true"
        suppressContentEditableWarning="true"
        onKeyDown={e => e.key.toLowerCase() == "enter" && e.target.blur()}
        onKeyUp={e => changeItem("title", e.target.textContent)}
        ref={spanRef}
        >{defaultValue}</span>
    )
}