import "./index.sass";
import session from "../../data/session";
import Attribute from "./attribute";
import { Attribute as AttributeClass } from "../../data/classes";
import { ImageIcon } from "../../assets/icons";
import ImageUpload from "../image-upload";
import { useEffect, useState } from "react";
import { ln } from "../../utils/math";

export default function Attributes () {
    const { item: { title, icon, attributes, template }, item, changeItem, set, attributes: open } = session(s => s);
    const [uploadactive, setUploadactive] = useState(false);
    useEffect(_ => set({ attributes: item && attributes.length > 0 }), [item])

    function updateAttribute(istemp, index) {
        const array = item[istemp], attribute = array[index]
        const update = x => changeItem(istemp, array.map((i, n) => n == index ? {...attribute, ...x} : i))
        const types = ["text", "number", "checkbox"]
        return (prop, newvalue) => _ => {let action = {
            type: _=> update({type: types[ln(types, types.indexOf(attribute.type))]}),
            title: _=> update({title: newvalue}),
            content: _ => update({content: newvalue})
        }; action[prop]()}
    }

    if (open) return (
        <div className={"Attributes attributes-small" + ((!title) ? " attributes-empty" : "")}>
            <div className="attributes-background"></div>
            <div className={"icon-input" + (attributes && !icon ? " icon-input-empty" : "")}>
                    <div className="click-shield" onClick={() => setUploadactive(!uploadactive)}></div>
                    <div className={"icon-input-icon" + (icon ? " has-icon" : "")}>
                        {!icon && <ImageIcon />}
                        {icon && <img src={icon} referrerPolicy="same-origin"/>}
                    </div>
                    {icon ? <span>Edit Icon</span> : <span>Add an Icon</span>}
                    {uploadactive && <ImageUpload
                        main="true"
                        uploadCallback={e => {changeItem("icon", e.value); setUploadactive(false)}}
                        cancelCallback={() => setUploadactive(false)}
                    />}
            </div>
            <h2 className="attributes-title">{title}</h2>
            <div className="attributes">
                {attributes.map((i, n) => <Attribute  key={n} updateCallback={updateAttribute("attributes", n)} {...i}/>)}
            </div>
            <div className="attributes-add" onClick={()=>changeItem("attributes", [...attributes, new AttributeClass()])}>
                <span>Add an attribute</span>
                <span>+</span>
            </div>
            <hr className="attributes-divider"/>
            <div className="template-attributes attributes">
                {template.map((i, n) => <Attribute template={true} key={n} updateCallback={updateAttribute("template", n)} {...i}/>)}
            </div>
            <div className="template-attributes-add attributes-add" onClick={()=>changeItem("template", [...template, {type: "text", title: ""}])}>
                <span>Add a template attribute</span>
                <span>+</span>
            </div>
        </div>
    )
}