import "./index.sass";
import Item from "../../../components/item";
import session from "../../../data/session";
import { useEffect, useMemo, useState } from "react";
import { OpalIcon } from "../../../assets/icons";
import anime from "animejs";

export default function Collection () {
    const { item, realm, getItems } = session(s => s);
    const [items, setItems] = useState([]);
    
    useMemo(() => {
        setItems(i => [])
        getItems(item?.id).then(x => setItems(i => x));
        
    }, [item, realm]);

    return (
        <div className="Collection display">
            {items && items.map((i, n) => <Item key={n} {...i} />)}
        </div>
    )
}