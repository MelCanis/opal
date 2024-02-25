import { useEffect, useState } from "react"
import { create } from "zustand"
import EventHandler from "../mousehandler";
import "./index.sass"
import { sessionExtended } from "../../data/session/extended";

export const directoryToolStore = create((set, get) => ({
    selected: [],
    dragging: [],
    dropping: null,
    select: x => set(s => ({ ...s, selected: get().selected.includes(x) ? get().selected.filter(i => i != x) : [...get().selected, x]})),
    set: x => set(s => ({...s, ...x}))
}))

export default function useDirectoryTools () {
    const initialdrag = { mousedown: false, isdrag: false, droppath: null, confirming: false }
    const [dragstate, setdragstate] = useState(initialdrag)
    
    const { set, dragging, selected, dropping } = directoryToolStore(s => s)
    const { send } = sessionExtended(s => s)
    useEffect(_ => {
        const { mousedown, isdrag } = dragstate
        mousedown && window.addEventListener("mouseup", drag)
        return _ => {
            window.removeEventListener("mouseup", drag)
        }
    }, [dragstate, dragging, dropping])
    // useEffect(_ => {console.log(dragging, dropping)}, [dropping])

    function setState (x) { setdragstate(s => ({...s, ...x})) }
    function drag (e, id) {
        e.type == "mousedown" && setState({mousedown: true})
        const isdragged = dragging.includes(id), isdragging = dragging.length > 0
        if (e.type == "mouseup") {
            // console.log("00", dragging, dropping)
            if (dropping) {send(dragging, dropping); return}
            setState(initialdrag)
            setTimeout(_ => set({ dragging: [], dropping: null }), 100)
        }
        if ((e.type == "mouseenter" || e.type == "mouseover") && isdragging & !isdragged) {
            set({dropping: id})
        }
        if (e.type == "mouseleave" && isdragging && !isdragged) {
            set({dropping: null})
        }
        if (!e.target.classList.contains("Item")) return
        if (e.type == "mouseleave" && dragstate.mousedown && !dragstate.isdrag) {
            setState({isdrag: true})
            set({ dragging: selected.length > 0 ? selected : [id] })
        }
    }

    function DragInfoTag ({style}) {
        const [client, setclient] = useState(null)
        useEffect(_ => {
            const follow = e => setclient({ top: `${e.clientY + 32}px`, left: `${e.clientX + 32}px` })
            window.addEventListener("mousemove", follow)
            return _ => window.removeEventListener("mousemove", follow)
        }, [])

        if (dragging.length > 0) return (
            <div className="DragInfoTag" style={client}>{dragging.length} Item{dragging.length>1?"s":""}</div>
        )
    }
    const createListener = EventHandler().events;
    const draggable = id => createListener(["onMouseDown", "onMouseLeave", "onMouseEnter"], e => {e.stopPropagation(); drag(e, id)})
    const droppable = id => createListener(["onMouseOver", "onMouseLeave"], e => { drag(e, id) })
    
    return {
        draggable: draggable,
        droppable: droppable,
        DragInfoTag: DragInfoTag,
    }
}