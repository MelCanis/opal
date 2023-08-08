import "./index.sass";
import Item from "../../../components/item";
import session from "../../../data/session";
import { useEffect, useMemo, useState } from "react";

export default function Collection () {
    const { item, realm, getItems } = session(s => s);
    const [items, setItems] = useState([]);
    useMemo(() => {
        getItems(item?.id).then(x => setItems(x));
    }, [item, realm]);
    return (
        <div className="Collection display">
            {items.map((i, n) => <Item key={n} {...i} />)}
        </div>
    )
}