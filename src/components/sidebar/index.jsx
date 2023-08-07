import { useEffect, useState } from "react";
import { AttributeIcon, BoxIcon, DoorIcon, DoorOpenIcon, GearIcon, GridIcon, OpalIcon, PaperIcon, PencilIcon, PlusIcon, RealmIcon, SearchIcon, ThoughtspaceIcon, WarpIcon } from "../../assets/icons";
import session from "../../data/session";
import "./index.sass";

function GlowIcon ({onClick, Svg, s, opalicon}) {
    return (
        <div className={"glow-cont" + (s ? " search-icon" : "")} onClick={onClick}>
            <div className={"glow" + (s ? " glow-s":"")}></div>
            <Svg className={"icon-accent" + (opalicon ? " opal-icon" : "")}/>
        </div>
    )
}

function RealmOptions ({closeCallback}) {
    const { getRealms, realm, setRealm } = session(s => s);
    return (
        <div className="RealmOptions">
            <div className="realm-option-bridge"></div>
            {getRealms().filter(({id}) => id != realm.id).map(i => <div className="realm-option" 
            onClick={() => {setRealm(i.id); closeCallback();}}>
               {(i.icon ? <img src={i.icon} alt="" className="realm-option-icon" /> :
               <div className="realm-option-icon-empty"><RealmIcon /></div>)}
               <div className="realm-option-title">{i.title}</div>
            </div>)}
        </div>
    )
}


export default function Sidebar () {
    const { set, display, openRealms, getRealms, createItem, item, attributes } = session(s => s);
    const [close, setClose] = useState(false);
    function closeRealmOptions () {
        setClose(c => true);
        setTimeout(() => setClose(false), 100);
    }
    return (
        <div className="Sidebar">
            <div className="top">
                <GlowIcon Svg={OpalIcon} opalicon={true}/>
                {display != "realm" &&
                <><GlowIcon Svg={SearchIcon} s={true}/>
                <span>
                    <RealmIcon onClick={openRealms} className="realm-icon icon-inactive"/>
                    {!close && getRealms().length > 1 && <RealmOptions closeCallback={closeRealmOptions} />}
                </span>
                </>
                }
                {display == "grid" && <GridIcon className="icon-smaller"/>}
                {/* <ThoughtspaceIcon /> */}
                {display == "editor" && <PencilIcon className="icon-smaller"/>}
                {/* <DoorOpenIcon className="icon-smaller"/> */}
                {display != "realm" && item && <AttributeIcon className="icon-smaller icon-inactive" onClick={() => set({attributes: !attributes})}/>}
                {/* <BoxIcon className="icon-even-smaller icon-inactive"/> */}
            </div>
            <div className="bottom">
                {display != "realm" && <GlowIcon Svg={PlusIcon} onClick={() => createItem()}/>}
                <GearIcon  className="icon-smaller"/>
            </div>
        </div>
    )
}