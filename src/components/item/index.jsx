import { MoreIcon, OpalIcon, XIcon } from "../../assets/icons";
import "./index.sass";
import session from "../../data/session";
import { useEffect, useMemo, useState } from "react";
import { deletionStore } from "../topbar/components/more";

export default function Item ({title, id, icon, content, attributes, child}) {
    const { setItem, getItems, deleteItem } = session(s => s);
    const { deleting } = deletionStore(d => d);
    const [hasChildren, setHasChildren] = useState(null);
    const [children, setChildren] = useState([]);

    useMemo(() => {
        if (child) return;
        getItems(id).then(x => { setChildren(c => x); setHasChildren(hc => x.length > 0)});
    }, []);
    
    if (child || hasChildren !== null) return (
        <div
        className={
            "Item" +
            (hasChildren ? " has-children" : "") +
            ((!content && !hasChildren) ? (attributes.length > 0 ? " no-content-has-attributes no-content" : " no-content") : "") + 
            (icon ? " has-icon" : "") + (icon && !hasChildren && !content ? " only-icon" : "") +
            (child ? " child" : "")
        }
        onClick={(!child && !deleting) ? () => setItem(id) : null}
        >
            {(!content && !hasChildren) && <span className="item-head">
               {icon && <img className="item-icon icon-only" src={icon} referrerPolicy="same-origin" />}
               {title && <div className="item-title">{title}</div>}
            </span>}

            {(content || hasChildren) && <>
            {title && <div className={"item-top" + (icon ? " with-icon" : "")}>
                <div className="left">
                {icon && <img className="item-icon" src={icon} referrerPolicy="same-origin" />}
                    <div className="title">{title}</div>
                </div>
                {!child && <div className="right">
                    <MoreIcon />
                </div>}
            </div>}
            { (child || !hasChildren) ?
                <div className="item-content">{content}</div> :
                <div className="item-children">
                    {children.map((i, n) => <Item key={n} child={true} {...i}/>)}
                </div>
            }
            </>}
            {attributes.length > 0 && <div className="item-attributes">
                {attributes.map((i, n) => <span key={n} className="item-attribute">
                    <span className="item-attribute-content">{i.content}</span>
                    <span className="item-attribute-title">{i.title}</span>
                </span>)}
            </div>}
            {!child && <XIcon className="x" onClick={_=> deleteItem(id)}/>}
        </div>
    )
}