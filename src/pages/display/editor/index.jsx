import { useEffect, useMemo, useRef, useState } from "react";
import "./index.sass";
import session from "../../../data/session";

export default function Editor () {
    const { item: { id, content }, changeItem, saveItem } = session(s => s);
    const [ ticker, setTicker ] = useState(null);
    const [ count, setCount ] = useState(0)
    const firstLoad = useRef(true);
    const textarea = useRef();
    useEffect(_ => {
        if (firstLoad.current) {firstLoad.current = false;return}
        if (count > 0) {
            setTicker(setTimeout(_ => {setCount(c => 0)}, 1500));
            return;
        }
        changeItem("content", textarea.current.value);
    }, [count]);
    useMemo(_ => {
        saveItem(id)
    }, [content])


    return (
        <div className={"Editor display" + (content?.includes("\n") ? " document" : '')}>
            <textarea ref={textarea} placeholder="Start an item..." onInput={e => {clearTimeout(ticker); setCount(c => c+1)}} defaultValue={content}></textarea>
        </div>
    )
}