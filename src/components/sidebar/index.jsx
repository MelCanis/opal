import { useEffect, useMemo, useState } from "react";
import { AttributeIcon, BoxIcon, DoorIcon, DoorOpenIcon, GearIcon, GridIcon, LogoutIcon, OpalIcon, PaperIcon, PencilIcon, PlusIcon, RealmIcon, SearchIcon, ThoughtspaceIcon, WarpIcon } from "../../assets/icons";
import session from "../../data/session";
import "./index.sass";
import { removeUser } from "../../data/local";

function GlowIcon ({onClick, Svg, s, opalicon}) {
    return (
        <div className={"glow-cont" + (s ? " search-icon" : "")} onClick={onClick}>
            <div className={"glow" + (s ? " glow-s":"")}></div>
            <Svg className={"icon-accent" + (opalicon ? " opal-icon" : "")}/>
        </div>
    )
}

function RealmOptions ({realms, closeCallback}) {
    const { getRealms, realm, setRealm } = session(s => s);
    return (
        <div className="RealmOptions">
            <div className="realm-option-bridge"></div>
            {realms?.filter(({id}) => id != realm.id).map((i, n) => <div key={n} className="realm-option" 
            onClick={() => {setRealm(i.id); closeCallback();}}>
               {(i.icon ? <img src={i.icon} alt="" className="realm-option-icon" /> :
               <div className="realm-option-icon-empty"><RealmIcon /></div>)}
               <div className="realm-option-title">{i.title}</div>
            </div>)}
        </div>
    )
}

function SettingsMenu () {
    const { set } = session(s => s);
    return (
        <div className="SettingsMenu">
            <div className="settingsmenu-bridge"></div>
            <span className="settingsmenu-top">
                <h5>User</h5>
                <h6>username@gmail.com</h6>
            </span>
            <div className="settingsmenu-menu">
                <p>My Account</p>
                <p>Customization</p>
                <hr />
                <p onClick={() => {removeUser(); set({signedin: false, user: null, realm: null, item: null})}}>Logout <LogoutIcon /></p>
            </div>
        </div>
    )
}


export default function Sidebar () {
    const { set, display, openRealms, getRealms, createItem, item, attributes } = session(s => s);
    const [close, setClose] = useState(false);
    const [realms, setRealms] = useState([]);
    useMemo(() => {
        getRealms().then(x => setRealms(x));
    }, [])
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
                <span className="realm-icon-shield">
                    <RealmIcon onClick={openRealms} className="realm-icon icon-inactive"/>
                    {!close && realms.length > 1 && <RealmOptions realms={realms} closeCallback={closeRealmOptions} />}
                </span>
                </>
                }
                {display == "grid" && <GridIcon className="icon-smaller"/>}
                {display == "thought" && <ThoughtspaceIcon className="icon-smaller" />}
                {display == "editor" && <PencilIcon className="icon-smaller" />}
                {/* <DoorOpenIcon className="icon-smaller"/> */}
                {display != "realm" && item && <AttributeIcon className="icon-smaller icon-inactive" onClick={() => set({attributes: !attributes})}/>}
                {/* <BoxIcon className="icon-even-smaller icon-inactive"/> */}
            </div>
            <div className="bottom">
                {display != "realm" && <GlowIcon Svg={PlusIcon} onClick={() => createItem()}/>}
                <span className="gear-icon-shield">
                    <GearIcon  className="gear-icon icon-smaller icon-inactive"/>
                    <SettingsMenu />
                </span>
            </div>
        </div>
    )
}