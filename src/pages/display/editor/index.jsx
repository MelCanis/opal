import { useEffect, useState } from "react";
import "./index.sass";
import session from "../../../data/session";

export default function Editor () {
    const { item: { content }, changeItem } = session(s => s);

    return (
        <div className={"Editor display" + (content?.includes("\n") ? " document" : '')}>
            <textarea placeholder="Start an item..." onInput={e => changeItem("content", e.target.value)} defaultValue={content}></textarea>
        </div>
    )
}