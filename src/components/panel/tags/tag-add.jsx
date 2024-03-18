import TagOptions from "./tag-options"
import { useRef, useState } from "react"
import "./index.sass"
import { sessionSecondary } from "../../../data/session/secondary"
import { colors} from "../../../data/session/secondary/tags"
import { lno } from "../../../utils/math"
import { MoreIcon } from "../../../assets/icons"

export function TagAddItem(data) {
    const { id, color, title, filter } = data
    const { changeTag } = sessionSecondary(s => s)
    const [fao, setfao] = useState(false)
    console.log("filter", filter)
    return (
        <div className="TagAddItem">
            <div className="color" style={{ background: color }} onClick={_ => changeTag(id, { color: lno(colors, color) })}></div>
            <div className="tag-name">{title}</div>
            <button className="tag-options" onClick={_ => setfao(!fao)}>
                <MoreIcon />
            </button>
            {fao && <TagOptions {...data} />}
        </div>
    )
}

export function TagAdd() {
    const { addTag } = sessionSecondary(s => s)
    const inputref = useRef(), { current } = inputref
    const addTagAction = _ => { addTag(current.value.trim()); current.value = "" }
    return (
        <div className="TagAdd">
            <input type="text"
                placeholder="Enter Tag Title..."
                ref={inputref}
                onKeyDown={({ key, target }) => key.toLowerCase() == "enter" && !target.value.trim() == "" && addTagAction()} />
            <button onClick={addTagAction}>Add Tag</button>
        </div>
    )
}