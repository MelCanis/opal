import { CheckIcon, DragIcon, MoreIcon, NumberIcon, TextIcon } from "../../../assets/icons";
import "./index.sass";

export default function Attribute ({type, title, content, template, updateCallback}) {
    return (
        <div className="attribute">
            <div className={"attribute-title" + (template? " template-attribute-title" : "")}>
                {<span 
                className="attribute-type-click-shield"
                onClick={_ => updateCallback("type")()}
                >
                    {type == "text" ? <TextIcon className={"attribute-type"}/> :
                    type == "number" ? <NumberIcon className={"attribute-type"}/> :
                    <CheckIcon className={"attribute-type"}/>}
                </span>}
                <input
                type="text"
                className="attribute-title-textarea"
                placeholder="Enter Attribute Title..."
                defaultValue={title}
                onChange={e => updateCallback("title", e.target.value)()}
                />
            </div>
            {!template &&
            <div className="attribute-content">
                {
                    type == "text" ?
                    <textarea
                    placeholder="Enter Text..."
                    defaultValue={content}
                    onBlur={e => e.target.value = content.slice(0, 25) + "..."}
                    onFocus={e => e.target.value = content}
                    onChange={e => updateCallback("content", e.target.value)()}
                    ></textarea> :

                    type == "number" ?
                    <input
                    type="number"
                    placeholder="Enter Number..."
                    defaultValue={content}
                    onChange={e => updateCallback("content", e.target.value)()}
                    /> :
                    <input type="checkbox" checked={content}
                    onChange={e => updateCallback("content", e.target.checked)()} />
                }
                
            </div>
            }
            {/* <DragIcon /> */}
            {/* <MoreIcon className="attributes-more" /> */}
        </div>
    )
}