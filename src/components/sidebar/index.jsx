import { useEffect, useMemo, useState } from "react";
import { AttributeIcon, BoxIcon, DoorIcon, DoorOpenIcon, FilterIcon, GearIcon, GridIcon, LogoutIcon, OpalIcon, PaperIcon, PencilIcon, PlusIcon, RealmIcon, SearchIcon, ThoughtspaceIcon, WarpIcon } from "../../assets/icons";
import session from "../../data/session";
import "./index.sass";
import { removeUser } from "../../data/local";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    return (
        <div className="RealmOptions">
            <div className="realm-option-bridge"></div>
            {realms?.filter(({id}) => id != realm.id).map((i, n) => <div key={n} className={i.icon? "realm-option" : "realm-option-no-icon"} 
                onClick={() => {navigate(`/${i.id}`); closeCallback();}}>
                {(i.icon ? <img src={i.icon} alt="" className="realm-option-icon" referrerPolicy="same-origin" /> :
               <div className="realm-option-icon-empty"><RealmIcon /></div>)}
               <div className="realm-option-title">{i.title}</div>
            </div>)}
        </div>
    )
}

function SettingsMenu () {
    const { set, user } = session(s => s);
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
    const { set, set2, display, thoughtspace, openRealms, getRealms, createItem, item, attributes, panel, search } = session(s => s);
    const [close, setClose] = useState(false);
    const [realms, setRealms] = useState([]);
    const navigate = useNavigate()
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
                <>
                {search ? <SearchIcon className="searching" onClick={e => set({ search: !search })} /> : <GlowIcon Svg={SearchIcon} s={true} onClick={e => set({search: !search})}/>}
                <span className="realm-icon-shield">
                    <RealmIcon onClick={_ => {navigate("/realms"); set2({display: "realm"})}} className="realm-icon icon-inactive"/>
                    {!close && realms.length > 1 && <RealmOptions realms={realms} closeCallback={closeRealmOptions} />}
                </span>
                </>
                }
                {(!thoughtspace && display == "grid") && <GridIcon className="icon-smaller" onClick={e => set({thoughtspace: !thoughtspace})}/>}
                {(thoughtspace && display == "grid") && <ThoughtspaceIcon className="icon-smaller" onClick={e => set({ thoughtspace: !thoughtspace })} />}
                {display == "editor" && <PencilIcon className="icon-smaller" />}
                {/* <DoorOpenIcon className="icon-smaller"/> */}
                {display != "realm" && item && <AttributeIcon className="icon-smaller icon-inactive" onClick={() => set({attributes: !attributes})}/>}
                {/* <BoxIcon className="icon-even-smaller icon-inactive"/> */}
                {/* {display !== "realm" && <FilterIcon className="icon-smaller" onClick={_ => set({panel: !panel})}/>} */}
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