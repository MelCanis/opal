import { sessionExtended } from "../../../../data/session/extended"
import { directoryToolStore } from "../../../../utils/directory"

import { cp, ConfirmationPromptAction } from "../../../utils/confirmation-prompt"

export default function DeleteFromTopbar () {
    const { selected } = directoryToolStore(s => s)
    const { deleteMultiple } = sessionExtended(s => s)
    const { openConfirmationPrompt } = cp(s => s)
    
    
    if (selected.length >= 1) return (
        <div className="DeleteFromTopbar button"
            onClick={_ => openConfirmationPrompt(new ConfirmationPromptAction(
                `Are you sure you want to delete ${selected.length == 1 ? "this item" : `all ${selected.length} items`}?`,
                _ => deleteMultiple(selected),
                () => null
            ))}
        >Delete {selected.length} Item{selected.length > 1 ? "s" : ""}</div>
    )
}