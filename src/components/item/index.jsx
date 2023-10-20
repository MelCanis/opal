import { MoreIcon, OpalIcon } from "../../assets/icons";
import "./index.sass";
import session from "../../data/session";
import { useEffect, useMemo, useState } from "react";

export default function Item ({title, id, icon, content, attributes, child}) {
    const { setItem, getItems } = session(s => s);
    const [hasChildren, setHasChildren] = useState(null);
    const [children, setChildren] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useMemo(() => {
        // if (child) { setLoaded(l => true); return; }
        if (child) return;
        getItems(id).then(x => { setChildren(c => x); setHasChildren(hc => x.length > 0)});
    }, []);
    // useMemo(_ => {
    //     if (hasChildren === null) return;
    //     // if (!hasChildren) 
    //     setLoaded(l => true);
    // }, [hasChildren]);
    
    if (child || hasChildren !== null) return (
        <div
        className={
            "Item" + 
            ((!content && !hasChildren) ? (attributes.length > 0 ? " no-content-has-attributes no-content" : " no-content") : "") + 
            (icon ? " has-icon" : "") +
            (child ? " child" : "")
        }
        onClick={!child ? () => setItem(id) : null}
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
                <div className="right">
                    <MoreIcon />
                </div>
            </div>}
            { (child || !hasChildren) ?
                <div className="item-content">{content}</div> :
                <div className="item-children">
                    {children.map((i, n) => <Item key={n} child={true} {...i}/>)}
                </div>
            }
            </>}
            {attributes.length > 0 && <div className="item-attributes">
                {attributes.map(i => <span className="item-attribute">
                    <span className="item-attribute-content">{i.content}</span>
                    <span className="item-attribute-title">{i.title}</span>
                </span>)}
            </div>}
        </div>
    )
}