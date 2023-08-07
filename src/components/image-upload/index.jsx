import "./index.sass";
import "../../styles/components/index.sass";
import { LinkIcon, UploadIcon } from "../../assets/icons";
import session from "../../data/session";
import { useRef } from "react";

export default function ImageUpload ({main, uploadCallback, cancelCallback}) {
    const { changeItem } = session(s => s);
    const inputRef = useRef();
    return (
        <div className={"ImageUpload" + (main ? " imageupload-main" : "")} >
            <div className="imageupload-link">
                <input type="text" placeholder="Paste a URL..." className="input-1" ref={inputRef}/>
                <button onClick={e => uploadCallback(inputRef.current)}>
                    <LinkIcon />
                    {/* <span> */}
                        Upload URL

                    {/* </span> */}
                </button>
            </div>
            <button className="imageupload-file">
                <UploadIcon />
                {/* <span> */}
                    Upload File

                {/* </span> */}
            </button>
            <hr />
            <button className="imageupload-cancel cancel" onClick={cancelCallback}>Cancel Upload</button>
        </div>
    )
}