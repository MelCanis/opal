import { EyeIcon, FilterIcon } from "../../assets/icons";
import session from "../../data/session";
import Combine from "./components/buttons/combine";
import DeleteFromTopbar from "./components/buttons/delete";
import More from "./components/more";
import Path from "./components/path";
import Title from "./components/title";
import "./index.sass";

export default function Topbar () {
    const { item, realm } = session(s => s);
    return (
        <div className="Topbar">
            <div className="left">
                {!item && <div className="Realm-Title">{realm.title.toUpperCase()}</div>}
                {item && <><Title />
                <Path />
                </>}
            </div>
            <div className="right">
                {/* <FilterIcon />
                <EyeIcon /> */}
                <Combine />
                <DeleteFromTopbar />
                <More />
            </div>
        </div>
    )
}