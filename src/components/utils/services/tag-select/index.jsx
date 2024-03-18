import { Tag } from "../../../../data/classes"
import "./index.sass"

const MenuTag = ({ title, items, color }) => (
    <div className="tag">
        <span className="left">
            <div className="color" style={{ background: color }}></div>
            <span>{title}</span>
        </span>
        <input type="checkbox" />
    </div>
)
export default function TagSelect() {
    const tags = [new Tag("Done", null, [], "orange"), new Tag("Fancy", null, [], "green"),]
    const NoneAdded = _ => <div className="noneAdded">None Added</div>
    return (
        <div className="TagSelect cm-service">
            <h6>Attachable</h6>
            <div className="section">
                {tags.filter(i => !i.filter).length > 0 ?
                tags.filter(i => !i.filter).map(i => <MenuTag {...i}/>) :
                <NoneAdded />}
            </div>
            <h6>By Filter</h6>
            <div className="section">
                {tags.filter(i => i.filter).length > 0 ?
                tags.filter(i => i.filter).map(i => <MenuTag {...i} />) :
                <NoneAdded />}
            </div>
        </div>
    )
}