import "./index.sass";
import "../../styles/components/index.sass";
import { UploadIcon } from "../../assets/icons";

export default function ImageUpload () {
    return (
        <div className="ImageUpload">
            <div className="imageupload-link">
                <input type="text" placeholder="Paste a URL..." className="input-1"/>
                <button className="button-1">
                    {/* <UploadIcon /> */}
                    {/* <span> */}
                        Upload

                    {/* </span> */}
                </button>
            </div>
            <button className="imageupload-file button-2">
                {/* <UploadIcon /> */}
                {/* <span> */}
                    Upload File

                {/* </span> */}
            </button>
            <hr />
            <button className="imageupload-cancel cancel">Cancel Upload</button>
        </div>
    )
}