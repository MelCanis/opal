import "./index.sass";
import {items} from "../../../fakedata";
import Item from "../../../components/item";

export default function Collection () {
    return (
        <div className="Collection display">
            {items.map((i, n) => <Item key={n} {...i} />)}
        </div>
    )
}