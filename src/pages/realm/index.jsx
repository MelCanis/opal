import "./index.sass";
import RealmSelection from "./components/realmselection";
import RealmAdd from "./components/realmadd";
import { useState } from "react";
import session from "../../data/session";

export default function RealmDisplay () {
    const { realmedit } = session(s => s);
    return (
        <div className="RealmDisplay display">
            <div className="Realm-background-fill"></div>
            {!realmedit && <RealmSelection />}
            {realmedit && <RealmAdd />}
        </div>
    )
}