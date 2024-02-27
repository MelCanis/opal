import { useMemo, useRef, useState } from "react"
import "./index.sass"
import { randomNumberBetween  } from "../../../utils/math";
import Environment from "../../../utils/hooks/environment";
import session from "../../../data/session";
import { useNavigate } from "react-router-dom";

function Dot ({title, id, callback}) {
    const [wasDrag, setWasDrag] = useState({mousedown: false, was: false});
    const style = useRef({ top: randomNumberBetween(10, 90) + "%", left: randomNumberBetween(10, 90) + "%" });
    const navigate = useNavigate()
    return (
        <div className="dot"
            style={style.current}
            onMouseDown={e => {
                callback(e);
                setWasDrag(s => ({ ...s, mousedown: true, }))
            }}
            onMouseUp={e => {
                !wasDrag.was && navigate(`/${id}`);
                setWasDrag(s => ({mousedown: false, was: false}))
            }}
            onMouseMove={e => {
                if (wasDrag.mousedown) setWasDrag(s => ({ ...s, was: true }))
            }}
            draggable="false"
        >
            <div className="title">{title}</div>
        </div>
    )
}

export default function Thought () {
    const { item, realm, getItems } = session(s => s);
    const [items, setItems] = useState([]);

    useMemo(() => {
        setItems(i => []);
        getItems(item?.id).then(x => setItems(i => x));
    }, [item, realm]);
    return (
        <div className="Thought display">
            {items && <Environment children={items.filter(i => i.title).map(i => x => (<Dot {...i} {...x}/>))}/>}
        </div>
    )
}