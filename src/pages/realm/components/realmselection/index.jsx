import "./index.sass";
import { Plus2Icon, RealmIcon } from "../../../../assets/icons";
import Realm from "../realm";
import { useMemo, useState } from "react";
import session from "../../../../data/session";

export default function RealmSelection () {
    const { createRealm, getRealms } = session(s => s);
    const [realms, setRealms] = useState([]);
    const [active, setActive] = useState(false);
    const switchActive = (x, y) => x ? setActive(y) : setActive(false);
    useMemo(() => {
        getRealms().then(x => setRealms(x));
    }, []);
    return (
        <div className="RealmSelection">
            <div className="realmselection-head">
                <RealmIcon className="realmselection-icon" />
                <h5>REALMS</h5>
            </div>
            <div className="realms">
                {realms.map((i, n) => <Realm className={active ? (active == n+1 ? "realm-active" : "realm-inactive") : false} key={n} {...i} n={n+1} onHover={switchActive}/>) }
            </div>
            <div className="realm-add" onClick={createRealm}>Create New Realm <Plus2Icon /></div>
            <h3 className="realmselection-open">Open Realm</h3>
        </div>
    )
}