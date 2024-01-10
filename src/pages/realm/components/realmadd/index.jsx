import { useMemo, useState } from "react";
import { ArrowBackIcon, ImageIcon, MoreIcon, OpalIcon, TrashIcon, UploadIcon } from "../../../../assets/icons"
import ImageUpload from "../../../../components/image-upload"
import session from "../../../../data/session"
import "./index.sass"

export default function RealmAdd () {
    const { realm, changeRealm, getRealm, openRealms, saveRealm, deleteRealm, editing } = session(s => s);
    const [uploading, setUploading] = useState(false);
    const [moreopen, setMoreopen] = useState();
    useMemo(_ => {

    }, []);
    function closeonout (e) { if (e.target.className != "nav") {setMoreopen(false); window.removeEventListener("click", closeonout)} }

    return (
        <div className="RealmAdd">
            <OpalIcon className="opal-background" />
            <div className="more-button">
                <MoreIcon className="more" onClick={_ => { setMoreopen(!moreopen); setTimeout(_ => window.addEventListener("click", closeonout), 100)}}/>
                {moreopen && <div className="nav">
                    Delete Realm <TrashIcon onClick={_ => { deleteRealm(realm.id); openRealms() }}/>
                </div>}
            </div>
            
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
                <button className="realm-create" onClick={() => { saveRealm(realm.id); openRealms(); }}><OpalIcon /> {editing ? "Finish" : "Create"}</button>
                <button className="realm-cancel" onClick={() => openRealms()}><ArrowBackIcon />Cancel</button>
            </div>
        </div>
    )
}