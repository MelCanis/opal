import { create } from "zustand";
import "./index.sass"

export class ConfirmationPromptAction {
    constructor (message, affirmaction, denyaction) {
        this.message = message
        this.affirmaction = affirmaction
        this.denyaction = denyaction
    }
} 
export const cp = create((set, get) => ({
    open: false,
    prompt: new ConfirmationPromptAction("", () => "", () => ""),
    openConfirmationPrompt: prompt => { set(s => ({open: true, prompt: prompt})) },
    toggle: x => set(s => ({open: x})),
    set: x => set(s => x),
}))


export default function ConfirmationPrompt () {
    const { open, toggle, prompt } = cp(s => s)
    if (open) return (
        <div className="ConfirmationPrompt">
            <div className="panel">
                <div className="message">{prompt.message}</div>
                <div className="options">
                    <button onClick={_ => {prompt.affirmaction(); toggle(false)}}>Yes</button>
                    <button onClick={_ => { prompt.denyaction(); toggle(false) }}>No</button>
                </div>
            </div>
        </div>
    )
}