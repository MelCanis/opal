import { useLocation, useNavigate, useParams } from "react-router-dom"
import session from "../data/session"
import { useEffect, useRef, useState } from "react"

export default function Auth() {
    const { item: id } = useParams()
    const { user, authid, newItem, set2, realm } = session(s => s)
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    useEffect(_ => {
        if (!loaded|| !user) { setLoaded(id); return }
        authid(id)
    }, [user, id, loaded])
    useEffect(_ => {
        if (!newItem) return;
        navigate(`/${newItem}`); set2({newItem: false})
    }, [newItem])

    // useEffect(_ => {console.log(realm)}, [realm])
    return <div></div>
}
