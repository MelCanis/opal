import { useLocation, useParams } from "react-router-dom"
import session from "../data/session"
import { useEffect, useRef } from "react"

export default function Auth() {
    const { item: id } = useParams()
    const { user, authid } = session(s => s)
    const loaded = useRef(null)
    useEffect(_ => {
        if (!loaded.current || !user) { loaded.current = id; return }
        authid(id)
    }, [user, id ])
    return (<></>)
}
