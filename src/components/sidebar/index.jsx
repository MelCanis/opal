import { AttributeIcon, BoxIcon, GearIcon, OpalIcon, PlusIcon, RealmIcon, SearchIcon, ThoughtspaceIcon, WarpIcon } from "../../assets/icons";
import "./index.sass";

function GlowIcon ({Svg, s}) {
    return (
        <div className="glow-cont">
            <div className={"glow" + (s ? " glow-s":"")}></div>
            <Svg className="icon-accent"/>
        </div>
    )
}

export default function Sidebar () {
    return (
        <div className="Sidebar">
            <div className="top">
                <GlowIcon Svg={OpalIcon} />
                <RealmIcon />
                {/* <ThoughtspaceIcon /> */}
                <BoxIcon className="icon-smaller"/>
                <AttributeIcon className="icon-smaller" />
            </div>
            <div className="bottom">
                <GlowIcon Svg={SearchIcon} s={true}/>
                <GlowIcon Svg={PlusIcon} />
                <GearIcon  className="icon-smaller"/>
            </div>
        </div>
    )
}