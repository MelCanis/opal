import "./index.sass";
import Attribute from "./attribute";

export default function Attributes () {
    return (
        <div className="Attributes attributes-small">
            <div className="attributes-background"></div>
            {/* <h4 className="attributes-header">Attributes</h4> */}
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
            <hr className="attributes-divider"/>
            {/* <h4 className="attributes-header template-attributes-header">Template</h4> */}
            <div className="template-attributes attributes">
                <Attribute type="text" template={true}/>
            </div>
            <div className="template-attributes-add attributes-add">
                <span>Add a template attribute</span>
                <span>+</span>
            </div>
        </div>
    )
}