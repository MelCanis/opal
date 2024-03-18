import { useLocation, useNavigate, useParams } from "react-router-dom"
import session from "../data/session"
import { useEffect, useRef } from "react"

export default function Auth() {
    const { item: id } = useParams()
    const { user, authid, newItem, set2, realm } = session(s => s)
    const loaded = useRef(null)
    const navigate = useNavigate()
    useEffect(_ => {
        if (!loaded.current || !user) { loaded.current = id; return }
        authid(id)
    }, [user, id])
    useEffect(_ => {
        if (!newItem) return;
        navigate(`/${newItem}`); set2({newItem: false})
    }, [newItem])

    useEffect(_ => {console.log(realm)}, [realm])
    return (<></>)
}
