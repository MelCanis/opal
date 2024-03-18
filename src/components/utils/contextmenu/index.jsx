import { create } from "zustand"
import "./index.sass"
import { useEffect, useRef } from "react"
import { ArrowBackIcon } from "../../../assets/icons"

export const cm = create((set, get) => ({
    set: x => set(s => ({...s, ...x})),
    options: [],
    style: {},
    open: false,
    opencm: (options, { clientX, clientY }) => get().set({ options: options, style: { top: `${clientY - 8}px`, left: `${clientX + 16}px` }, open: true })
}))

export default function ContextMenu () {
    const { set, style, options, open } = cm(s => s)
    const ref = useRef()
    useEffect(_ => {
        if (open) {
            window.addEventListener("click", closeonout)
        }
        return () => window.removeEventListener("click", closeonout)
    }, [open])
    function closeonout (e) {
        if (e.target != ref.current && !ref.current.contains(e.target)) set({open: false})
    }
    
    if (open) return (
        <div ref={ref} className="ContextMenu"
        style={style}
        >
            {options.length > 0 && options.map(({title, action, Service, Svg }) => (
                <div key={title} className={`Option ${Service?"has-service":""}`} onClick={action ? action : null}>
                    <span>{title}</span>
                    {Service && <span className="service">
                        {Svg ? <Svg /> : <ArrowBackIcon />}
                        <Service />
                    </span>}
                </div>
            ))}
        </div>
    )
}