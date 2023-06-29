import { EyeIcon, FilterIcon, MoreIcon } from "../../assets/icons";
import Title from "./components/title";
import "./index.sass";

export default function Topbar () {
    return (
        <div className="Topbar">
            <div className="left">
                <Title />
            </div>
            <div className="right">
                <FilterIcon />
                <EyeIcon />
                <MoreIcon />
            </div>
        </div>
    )
}