import "./index.sass"
import { sessionSecondary } from "../../../data/session/secondary"
import { TagAdd, TagAddItem } from "./tag-add"

// /*
// save filters to secondary data, on change
// load pre-saved filter data into filter add
// use filter data to complete other functions (color coding, toggling what filters are shown)
// */

export default function Tags () {
    const { tags } = sessionSecondary(s => s)

    return (
        <div className="Tags">
            <TagAdd />
            <div className="tags">
                {tags.length > 0 ? tags.map((i) => <TagAddItem key={i.id} {...i}/>) : <span className="no-tags-message">No Tags Added</span>}
            </div>
        </div>
    )
}