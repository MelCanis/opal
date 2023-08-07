import "./index.sass";
import session from "../../data/session";
import Attribute from "./attribute";
import { Attribute as AttributeClass } from "../../data/classes";
import { ImageIcon } from "../../assets/icons";
import ImageUpload from "../image-upload";
import { useState } from "react";



export default function Attributes () {
    const { item: { title, icon, attributes, template }, changeItem } = session(s => s);
    const [uploadactive, setUploadactive] = useState(false);

    function updateAttribute (n, t) {
        const x = !t ?
        (o) => changeItem("attributes", attributes.map((i, nn) => nn == n ? {...i, ...o} : i)) :
        (o) => changeItem("template", template.map((i, nn) => nn == n ? {...i, ...o} : i));
        const y = {
            type: !t ? () => x({type: attributes[n].type == "text" ? "number" : "text"}) :
                    () => x({type: template[n].type == "text" ? "number" : "text"}),
            title: (v) => x({title: v}),
            content: (v) => x({content: v}),
        }
        return (x, x1) => {
            return () => {
                y[x](x1);
            }
        }
    }

    return (
        <div className={"Attributes attributes-small" + ((!title) ? " attributes-empty" : "")}>
            <div className="attributes-background"></div>
            <div className={"icon-input" + (attributes && !icon ? " icon-input-empty" : "")}>
                    <div className="click-shield" onClick={() => setUploadactive(!uploadactive)}></div>
                    <div className={"icon-input-icon" + (icon ? " has-icon" : "")}
                    >
                        {!icon && <ImageIcon />}
                        {icon && <img src={icon} referrerPolicy="same-origin"/>}
                    </div>
                    {icon ? <span>Edit Icon</span> : <span>Add an Icon</span>}
                    {uploadactive &&
                    <ImageUpload
                    main="true"
                    uploadCallback={e => {changeItem("icon", e.value); setUploadactive(false)}}
                    cancelCallback={() => setUploadactive(false)} />}
            </div>
            <h2 className="attributes-title">{title}</h2>
            <div className="attributes">
                {attributes.map((i, n) => <Attribute  key={n} updateCallback={updateAttribute(n)} {...i}/>)}
            </div>
            <div className="attributes-add" onClick={()=>changeItem("attributes", [...attributes, new AttributeClass()])}>
                <span>Add an attribute</span>
                <span>+</span>
            </div>
            <hr className="attributes-divider"/>
            <div className="template-attributes attributes">
                {template.map((i, n) => <Attribute template={true} key={n} updateCallback={updateAttribute(n, true)} {...i}/>)}
                
            </div>
            <div
            className="template-attributes-add attributes-add"
            onClick={()=>changeItem("template", [...template, {type: "text", title: ""}])}
            >
                <span>Add a template attribute</span>
                <span>+</span>
            </div>
        </div>
    )
}