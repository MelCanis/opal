import "./index.sass";
import Item from "../../../components/item";
import session from "../../../data/session";
import { useMemo, useState } from "react";
import { deletionStore } from "../../../components/topbar/components/more";
import useDirectoryTools from "../../../utils/directory";

export default function Collection () {
    const { item, realm, getItems } = session(s => s);
    const { deleting } = deletionStore(d => d);
    const [items, setItems] = useState([]);
    const { DragInfoTag } = useDirectoryTools()
    
    useMemo(() => {
        setItems(i => [])
        getItems(item?.id).then(x => setItems(i => x));
    }, [item, realm]);

    return (
        <div className={"Collection display" + (deleting? " deleting":"")}>
            {<DragInfoTag />}
            {items && items.map((i, n) => <Item key={n} {...i} />)}
        </div>
    )
}