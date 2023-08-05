import { CheckIcon, DragIcon, MoreIcon, NumberIcon, TextIcon } from "../../../assets/icons";
import "./index.sass";

export default function Attribute ({type, template}) {
    return (
        <div className="attribute">
            <div className={"attribute-title" + (template? " template-attribute-title" : "")}>
                {
                    type == "text" ? <TextIcon className={"attribute-type"}/> :
                    type == "number" ? <NumberIcon className={"attribute-type"}/> :
                    <CheckIcon className={"attribute-type"}/>
                }
                <input type="text" className="attribute-title-textarea" placeholder="Enter Attribute Title..."/>
            </div>
            {!template &&
            <div className="attribute-content">
                {
                    type == "text" ? <textarea placeholder="Enter Text..."></textarea> :
                    type == "number" ? <input type="number" placeholder="Enter Number..."/> : ""
                }
                
            </div>
            }
            {/* <DragIcon /> */}
            {/* <MoreIcon className="attributes-more" /> */}
        </div>
    )
}