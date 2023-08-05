import { ArrowBackIcon, ImageIcon, OpalIcon, UploadIcon } from "../../../../assets/icons"
import ImageUpload from "../../../../components/image-upload"
import "./index.sass"

export default function RealmAdd () {
    return (
        <div className="RealmAdd">
            <OpalIcon className="opal-background" />
            {/* <OpalIcon /> */}
            
            <div className="realmadd-head">
                <h5>Create a Realm</h5>
                <h6>Start your new workspace</h6>
            </div>

            <div className="realmadd-input">
                <div className="realm-input-container">
                    <div className="realm-icon-input">
                        <ImageIcon />
                    </div>
                    <label>
                        <UploadIcon />
                        <span>Upload an Icon</span>
                    </label>
                    {/* <ImageUpload /> */}
                </div>

                <div className="realm-input-container">
                    <input type="text" className="realm-title-input" placeholder="Enter a realm title" defaultValue={"New Realm"}/>
                    <label>Enter a Title</label>
                </div>
            </div>

            <div className="realmadd-foot">
                <button className="realm-create"><OpalIcon /> Create</button>
                <button className="realm-cancel"><ArrowBackIcon />Cancel</button>
            </div>
        </div>
    )
}