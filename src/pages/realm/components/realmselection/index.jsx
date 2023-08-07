import "./index.sass";
import { Plus2Icon, RealmIcon } from "../../../../assets/icons";
import Realm from "../realm";
import { useState } from "react";
import { userdata } from "../../../../data/template";
import session from "../../../../data/session";

export default function RealmSelection () {
    const { createRealm } = session(s => s);
    const [active, setActive] = useState(false);
    const switchActive = (x, y) => x ? setActive(y) : setActive(false);

    return (
        <div className="RealmSelection">
            <div className="realmselection-head">
                <RealmIcon className="realmselection-icon" />
                <h5>REALMS</h5>
            </div>
            <div className="realms">
                {userdata.realms.map((i, n) => <Realm className={active ? (active == n+1 ? "realm-active" : "realm-inactive") : false} key={n} {...i} n={n+1} onHover={switchActive}/>) }
            </div>
            <div className="realm-add" onClick={createRealm}>Create New Realm <Plus2Icon /></div>
            <h3 className="realmselection-open">Open Realm</h3>
        </div>
    )
}