import { useMemo, useRef, useState } from "react"
import "./index.sass"
import { randomNumberBetween  } from "../../../utils/math";
import Environment from "../../../utils/hooks/environment";
import session from "../../../data/session";
import { useNavigate } from "react-router-dom";
import { cm } from "../../../components/utils/contextmenu";
import { TagIcon } from "../../../assets/icons";
import TagSelect from "../../../components/utils/services/tag-select";
import { ConfirmationPromptAction, cp } from "../../../components/utils/confirmation-prompt";

function Dot ({title, id, callback}) {
    const [wasDrag, setWasDrag] = useState({mousedown: false, was: false});
    const style = useRef({ top: randomNumberBetween(10, 90) + "%", left: randomNumberBetween(10, 90) + "%" });
    const navigate = useNavigate()
    const { deleteItem } = session(s => s)
    const { opencm } = cm(s => s)
    const { openConfirmationPrompt } = cp(s => s)
    return (
        <div className="dot"
            style={style.current}
            onMouseDown={e => {
                if (e.button == 2) return;
                callback(e);
                setWasDrag(s => ({ ...s, mousedown: true, }))
            }}
            onMouseUp={e => {
                if (e.button == 2) return;
                !wasDrag.was && navigate(`/${id}`);
                setWasDrag(s => ({mousedown: false, was: false}))
            }}
            onMouseMove={e => {
                if (e.button == 2) return;
                if (wasDrag.mousedown) setWasDrag(s => ({ ...s, was: true }))
            }}
            onContextMenu={e => {
                e.preventDefault()
                opencm([
                    {title: "Delete Item", action: _ => openConfirmationPrompt(new ConfirmationPromptAction(
                        "Are you sure you want to delete this item?",
                        _ => deleteItem(id),
                        () => null
                    ))},
                    // {title: "Add Tags", Service: TagSelect, Svg: TagIcon}
                ], e)
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