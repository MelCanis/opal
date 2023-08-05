import { MoreIcon } from "../../assets/icons";
import "./index.sass";

export default function Item ({title, icon, content, children, child}) {
    return (
        <div className={"Item" + ((!content && !children) ? " no-content" : "") + (child ? " child" : "")}>
            {(!content && !children) && <>
               {icon && <img className="item-icon icon-only" src={icon}/>}
               {title && <div className="item-title">{title}</div>}
            </>}
            {(content || children) && <>
            {title && <div className={"item-top" + (icon ? " with-icon" : "")}>
                <div className="left">
                    {icon && <img className="item-icon" src={icon}/>}
                    <div className="title">{title}</div>
                </div>
                <div className="right">
                    <MoreIcon />
                </div>
            </div>}
            { !children ?
                <div className="item-content">{content}</div> :
                <div className="item-children">
                    {children.map((i, n) => <Item key={n} child={true} title={i} icon="https://opalbasic.netlify.app/assets/opal-96-444bf01b.png"/>)}
                </div>
            }
            </>}
        </div>
    )
}