import { useState } from "react";
import { ArrowBackIcon } from "../../../assets/icons";

export default function BasicNavMenu({ options: [options, setoptions] }) {
    const [open, setopen] = useState(false)
    return (
        <div className="BasicNavMenu">
            <button onClick={_ => setopen(!open)}>{options.find(({ selected }) => selected).title}<ArrowBackIcon style={{ transform: `rotate(-90deg)` }} /></button>
            {open && <div className="menu">
                {options.map(({ title }) => <p key={title} onClick={_ => { setoptions(o => o.map(i => ({ ...i, selected: i.title == title }))); setopen(false) }}>{title}</p>)}
            </div>}
        </div>
    )
}