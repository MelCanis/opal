import { useEffect, useRef, useState } from "react";
import { MoreIcon } from "../../../../assets/icons"
import "./index.sass"
import { create } from "zustand";

export const deletionStore = create((set, get) => ({
    deleting: false,
    setDeleting: x => set(s => ({ deleting: x }))
}))

export default function More () {
    const { deleting, setDeleting } = deletionStore(d => d);
    const [active, setActive] = useState(false);
    const menu = useRef();
    function closeMenu(e) { if (e.target !== menu.current) { setActive(false); window.removeEventListener("click", closeMenu); } }
    useEffect(_ => { active && setTimeout(_ => window.addEventListener("click", closeMenu), 100); }, [active])
    
    function endDeleting (e) {
        if (e.target.className != "x") { setDeleting(false); window.removeEventListener("click", endDeleting) }
    }
    useEffect(_ => { deleting && setTimeout(_  => window.addEventListener("click", endDeleting), 100) }, [deleting])


    return (
        <div className="More">
            <MoreIcon onClick={_ => setActive(!active)} />
            {active && <div className="menu" ref={menu}>
                <div className="span" onClick={_ => setDeleting(true)}>Delete Item(s)</div>
            </div>}
        </div>
    )
}