import { AttributeIcon, BoxIcon, DoorIcon, DoorOpenIcon, GearIcon, GridIcon, OpalIcon, PaperIcon, PlusIcon, RealmIcon, SearchIcon, ThoughtspaceIcon, WarpIcon } from "../../assets/icons";
import "./index.sass";

function GlowIcon ({Svg, s, opalicon}) {
    return (
        <div className={"glow-cont" + (s ? " search-icon" : "")}>
            <div className={"glow" + (s ? " glow-s":"")}></div>
            <Svg className={"icon-accent" + (opalicon ? " opal-icon" : "")}/>
        </div>
    )
}

export default function Sidebar () {
    return (
        <div className="Sidebar">
            <div className="top">
                <GlowIcon Svg={OpalIcon} opalicon={true}/>
                {/* <GlowIcon Svg={SearchIcon} s={true}/> */}
                {/* <RealmIcon className="realm-icon icon-inactive"/> */}
                {/* <GridIcon className="icon-smaller"/> */}
                {/* <ThoughtspaceIcon /> */}
                {/* <PaperIcon className="icon-smaller"/> */}
                {/* <DoorOpenIcon className="icon-smaller"/> */}
                {/* <AttributeIcon className="icon-smaller icon-inactive" /> */}
                {/* <BoxIcon className="icon-even-smaller icon-inactive"/> */}
            </div>
            <div className="bottom">
                {/* <GlowIcon Svg={PlusIcon} /> */}
                <GearIcon  className="icon-smaller"/>
            </div>
        </div>
    )
}