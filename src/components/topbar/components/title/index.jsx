import { useEffect, useMemo, useRef, useState } from "react";
import session from "../../../../data/session";
import "./index.sass";
import useTyping from "../../../../utils/hooks/useTyping";

export default function Title () {
    const { item: { title, id }, changeItem, updated, saveItem } = session(s => s);
    const [defaultValue, setDefaultValue] = useState(title);
    const spanRef = useRef();
    const { tick } = useTyping(() => changeItem("title", spanRef.current.textContent), 500);
    useEffect(() => { if (!spanRef.current) { return } setDefaultValue(title); spanRef.current.textContent = title; }, [id, spanRef]);
    useMemo(_ => { saveItem(id) }, [title]);
    return (
        <span
        type="text"
        className={"Title" + (title.length == "" ? " title-untitled": "")}
        contentEditable="true"
        suppressContentEditableWarning="true"
        onKeyDown={e => e.key.toLowerCase() == "enter" && e.target.blur()}
        onKeyUp={_=> tick()}
        ref={spanRef}
        >{updated ? defaultValue : "..."}</span>
    )
}