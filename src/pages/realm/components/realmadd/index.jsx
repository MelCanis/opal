import { useState } from "react";
import { ArrowBackIcon, ImageIcon, OpalIcon, UploadIcon } from "../../../../assets/icons"
import ImageUpload from "../../../../components/image-upload"
import session from "../../../../data/session"
import "./index.sass"

export default function RealmAdd () {
    const { realm, changeRealm, openRealms, saveRealm } = session(s => s);
    const [uploading, setUploading] = useState(false);
    return (
        <div className="RealmAdd">
            <OpalIcon className="opal-background" />
            
            <div className="realmadd-head">
                <h5>Create a Realm</h5>
                <h6>Start your new workspace</h6>
            </div>

            <div className="realmadd-input">
                <div className="realm-input-container">
                    <div className="realm-icon-input" onClick={() => setUploading(true)}>
                        {!realm.icon && <ImageIcon />}
                        {realm.icon && <img src={realm.icon} referrerPolicy="same-origin"/>}
                    </div>
                    <label>
                        <UploadIcon />
                        <span>Upload an Icon</span>
                    </label>
                    {uploading && <ImageUpload
                    uploadCallback={e => {changeRealm("icon", e.value); setUploading(false)}}
                    cancelCallback={() => setUploading(false)} />}
                </div>

                <div className="realm-input-container">
                    <input
                    type="text"
                    className="realm-title-input"
                    placeholder="Enter a realm title"
                    defaultValue={realm.title}
                    onInput={e => changeRealm("title", e.target.value)}
                    />
                    <label>Enter a Title</label>
                </div>
            </div>

            <div className="realmadd-foot">
                <button className="realm-create" onClick={() => { saveRealm(realm.id); openRealms(); }}><OpalIcon /> Create</button>
                <button className="realm-cancel" onClick={() => openRealms()}><ArrowBackIcon />Cancel</button>
            </div>
        </div>
    )
}