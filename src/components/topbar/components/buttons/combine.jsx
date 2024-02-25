import { sessionExtended } from "../../../../data/session/extended"
import { directoryToolStore } from "../../../../utils/directory"

export default function Combine () {
    const { selected } = directoryToolStore(s => s)
    const { combine } = sessionExtended(s => s)
    if (selected.length >= 2) return (
        <button className="Combine button"
        onClick={_ => combine(selected)}
        >
            Combine {selected.length} Items To New Item
        </button>
    )
}