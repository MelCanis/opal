import { useEffect, useState } from "react";
import "./index.sass";

export default function Editor () {
    const [value, setValue] = useState("");
    useEffect(()=> console.log(value), [value])

    return (
        <div className={"Editor display" + (value?.length > 30 ? " document" : '')}>
            <textarea placeholder="Start an item..." onInput={e => setValue(e.target.value)}></textarea>
        </div>
    )
}