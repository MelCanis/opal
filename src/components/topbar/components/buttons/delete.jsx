import { sessionExtended } from "../../../../data/session/extended"
import { directoryToolStore } from "../../../../utils/directory"

export default function DeleteFromTopbar () {
    const { selected } = directoryToolStore(s => s)
    const { deleteMultiple } = sessionExtended(s => s)
    if (selected.length >= 1) return (
        <div className="DeleteFromTopbar button" onClick={_ => deleteMultiple(selected)}>Delete {selected.length} Item{selected.length > 1 ? "s" : ""}</div>
    )
}