import { MoreIcon } from "../../assets/icons";
import "./index.sass";
import session from "../../data/session";

export default function Item ({title, id, icon, content, attributes, child}) {
    const { setItem, getItems } = session(s => s);

    return (
        <div
        className={
            "Item" + 
            ((!content && getItems(id).length == 0) ? (attributes.length > 0 ? " no-content-has-attributes no-content" : " no-content") : "") + 
            (icon ? " has-icon" : "") +
            (child ? " child" : "")
        }
        onClick={() => setItem(id)}
        >
            {(!content && getItems(id).length == 0) && <span className="item-head">
               {icon && <img className="item-icon icon-only" src={icon} referrerPolicy="same-origin" />}
               {title && <div className="item-title">{title}</div>}
            </span>}

            {(content || getItems(id).length > 0) && <>
            {title && <div className={"item-top" + (icon ? " with-icon" : "")}>
                <div className="left">
                {icon && <img className="item-icon" src={icon} referrerPolicy="same-origin" />}
                    <div className="title">{title}</div>
                </div>
                <div className="right">
                    <MoreIcon />
                </div>
            </div>}
            { child || getItems(id).length == 0 ?
                <div className="item-content">{content}</div> :
                <div className="item-children">
                    {getItems(id).map((i, n) => <Item key={n} child={true} {...i}/>)}
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