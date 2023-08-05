import { BoxIcon } from "../../assets/icons";
import "./index.sass";

function DrawerItem ({title, icon}) {
    return (
        <div className="DrawerItem">
            <div className="draweritem-icon"></div>
            <div className="draweritem-title">{title}</div>
        </div>
    )
}

export default function Drawer () {
    return (
        <div className="Drawer">
            {/* <BoxIcon className="empty-drawer-icon" /> */}
            <DrawerItem title={"Idea 3"} />
            <DrawerItem title={"Best Theater Titles of 2023"} />
        </div>
    )
}