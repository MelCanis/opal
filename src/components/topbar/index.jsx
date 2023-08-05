import { EyeIcon, FilterIcon, MoreIcon } from "../../assets/icons";
import Path from "./components/path";
import Title from "./components/title";
import "./index.sass";

export default function Topbar () {
    return (
        <div className="Topbar">
            <div className="left">
                <Title />
                <Path />
            </div>
            <div className="right">
                {/* <FilterIcon />
                <EyeIcon /> */}
                <MoreIcon />
            </div>
        </div>
    )
}