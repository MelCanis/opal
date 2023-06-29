import { CheckIcon, DragIcon, MoreIcon, NumberIcon, TextIcon } from "../../assets/icons";
import "./index.sass";

function Attribute ({type}) {
    return (
        <div className="attribute">
            <div className="attribute-title">
                {
                    type == "text" ? <TextIcon className={"attribute-type"}/> :
                    type == "number" ? <NumberIcon className={"attribute-type"}/> :
                    <CheckIcon className={"attribute-type"}/>
                }
                <textarea placeholder="Enter Attribute Title..."></textarea>
            </div>
            <div className="attribute-content">
                <textarea placeholder="Enter Text..."></textarea>
            </div>
            {/* <DragIcon /> */}
            {/* <MoreIcon className="attributes-more" /> */}
        </div>
    )
}

export default function Attributes () {
    return (
        <div className="Attributes">
            <div className="attributes-background"></div>
            <div className="icon-input">
                    <div className="icon-input-icon"></div>
                    <span>Add an Icon</span>
            </div>
            <h2 className="attributes-title">Naruto</h2>
            <div className="attributes">
                <Attribute type="number"/>
                <Attribute type="text"/>
            </div>
            <div className="attributes-add">
                <span>Add an attribute</span>
                <span>+</span>
            </div>
            {/* <hr /> */}
            {/* <div className="template-attributes attributes">
            </div>
            <div className="template-attributes-add attributes-add">
                <span>Add a template attribute</span>
                <span>+</span>
            </div> */}
        </div>
    )
}