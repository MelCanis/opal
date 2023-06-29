import "./index.sass";
import { Plus2Icon } from "../../../../assets/icons";
import Realm from "../realm";
import { realms } from "../../../../fakedata";
import { useState } from "react";

export default function RealmSelection () {
    
    const [active, setActive] = useState(false);
    const switchActive = (x, y) => x ? setActive(y) : setActive(false);

    return (
        <div className="RealmSelection">
            <div className="realms">
                {realms.map((i, n) => <Realm className={active ? (active == n+1 ? "realm-active" : "realm-inactive") : false} key={n} {...i} n={n+1} onHover={switchActive}/>) }
                
            </div>
            <div className="realm-add">Create New Realm <Plus2Icon /></div>
        </div>
    )
}