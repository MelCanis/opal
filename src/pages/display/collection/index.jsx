import "./index.sass";
import Item from "../../../components/item";
import session from "../../../data/session";

export default function Collection () {
    const { item, getItems } = session(s => s);
    return (
        <div className="Collection display">
            {getItems(item?.id).map((i, n) => <Item key={n} {...i} />)}
        </div>
    )
}