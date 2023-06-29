import { MoreIcon } from "../../assets/icons";
import "./index.sass";

export default function Item ({title, icon, content}) {
    return (
        <div className={"Item" + (!content ? " no-content" : "")}>
            {(!content) && <>
               {icon && <img className="item-icon icon-only" src={icon}/>}
               {title && <div className="item-title">{title}</div>}
            </>}
            {(title && content) && <>
            <div className={"item-top" + (icon ? " with-icon" : "")}>
                <div className="left">
                    {icon && <img className="item-icon" src={icon}/>}
                    <div className="title">{title}</div>
                </div>
                <div className="right">
                    <MoreIcon />
                </div>
            </div>
            <div className="item-content">{content}</div>
            </>}
        </div>
    )
}