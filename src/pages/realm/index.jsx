import "./index.sass";
import RealmSelection from "./components/realmselection";
import RealmAdd from "./components/realmadd";

export default function RealmDisplay () {
    return (
        <div className="RealmDisplay display">
            <div className="Realm-background-fill"></div>
            <RealmSelection />
            {/* <RealmAdd /> */}
        </div>
    )
}