import "./index.sass";
import { items } from "../../fakedata";
import { useMemo, useState } from "react";
import { DoorIcon } from "../../assets/icons";
import session from "../../data/session";
import { useNavigate } from "react-router-dom";

function SearchOption ({ title, icon, id }) {
    const { setItem } = session(s => s);
    const navigate = useNavigate()
    return (
        <div className="SearchOption" onClick={e => navigate(`/${id}`)}>
            
            {/* <div className="searchoption-icon">
                
            </div> */}
            {icon ? <img src={icon} alt="" className="search-option-icon" referrerPolicy="same-origin" /> : 
            <DoorIcon className="search-option-icon-svg"/> }
            <div className="search-option-title">{title}</div>
        </div>
    )
}

export default function Search () {
    const { item, getItems, realm } = session(s => s);
    const [items, setItems] = useState([]);
    useMemo(() => {
        getItems('', realm.id, true).then(x => setItems(i => x));
        console.log(items)
    }, [item, realm]);
    const [ query, setQuery ] = useState("");
    const navigate = useNavigate()

    return (
        <div className="Search">
            <input placeholder="Search" className="bar" onChange={e => setQuery(e.target.value.toLowerCase())}
            onKeyDown={({ key, target }) => {
                if (key.toLowerCase() == "enter") {
                    const id = items.filter(i => i.title.trim() != "" && i.title.toLowerCase().includes(query))[0].id;
                    navigate(`/${id}`)
                    setQuery("");
                    target.value = "";
                }
            }}/>
            {<div className="results">
                {items.filter(i => i.title.trim() != "" && i.title.toLowerCase().includes(query)).map(i => (<SearchOption {...i} />))}
            </div>}
        </div>
    )
}