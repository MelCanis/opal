import "./index.sass"
import { RealmIcon } from "../../../../assets/icons";

export default function Realm ({icon, title, className, n, onHover}) {
    return (
        <div className={"Realm " + (className ? className : "")} onMouseOver={e => onHover(true, n)} onMouseOut={e => onHover(false)}>

            {icon ? <img className='realm-icon' src={icon}/> : <div className="realm-icon"></div>}
            <div className="realm-title">
                {title ? title : "New Realm" }
            </div> 
        </div>
    )
}