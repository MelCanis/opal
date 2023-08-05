import "./index.sass";
import { items } from "../../fakedata";

function SearchOption ({ title, icon }) {
    return (
        <div className="SearchOption">
            <div className="searchoption-icon"></div>
            <div className="searchoption-title">{title}</div>
        </div>
    )
}

export default function Search () {
    return (
        <div className="Search">
            <div className="search-lay"></div>
            <div className="search-panel">
                <input type="text" className="searchbar"  placeholder="Type a search..."/>
            <div className="search-options">
                <SearchOption title="Idea 1" />
                <SearchOption title="Plans for Trip" />
                <SearchOption title="How to Cook Traditional Asian Dishes" />
            </div>
            </div>
        </div>
    )
}