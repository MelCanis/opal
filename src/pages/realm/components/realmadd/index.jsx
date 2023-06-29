import { UploadIcon } from "../../../../assets/icons"
import ImageUpload from "../../../../components/image-upload"
import "./index.sass"

export default function RealmAdd () {
    return (
        <div className="RealmAdd">
            <h5>Create a Realm</h5>
            <div className="realm-input-container">
                <div className="realm-icon-input">
                    <div className="internal"></div>
                </div>
                <label>
                    <UploadIcon />
                    <span>Upload an Icon</span>
                </label>
                <ImageUpload />
            </div>

            <div className="realm-input-container">
                <input type="text" className="realm-title-input" placeholder="Enter a realm title" defaultValue={"New Realm"}/>
                <label>Enter a Title</label>
            </div>
            
            <button className="realm-create">Create</button>
            <button className="realm-cancel">Cancel Realm</button>
        </div>
    )
}