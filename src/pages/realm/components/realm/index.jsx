import "./index.sass"
import { PencilIcon, RealmIcon } from "../../../../assets/icons";
import session from "../../../../data/session";

export default function Realm ({id, icon, title, className, n, onHover}) {
    const { setRealm, set, getRealm } = session(s => s);
    return (
        <div 
        className={"Realm " + (className ? className : "")}
        onMouseOver={e => onHover(true, n)}
        onMouseOut={e => onHover(false)}
        >
            <div className="click-shield" onClick={() => setRealm(id)}></div>
            {icon ? <img className='realm-icon' src={icon} referrerPolicy="same-origin"/> : <div className="realm-icon"><RealmIcon /></div>}
            <div className="realm-title">
                {title ? title : "New Realm" }
            </div>
            <button onClick={() => getRealm(id).then(x => set({realmedit: true, realm: x, editing: true}))} className="realm-edit"><PencilIcon />Edit</button>
        </div>
    )
}