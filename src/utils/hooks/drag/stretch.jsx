import { useEffect, useState } from "react";
import { rect } from "../../room-tools/rect";

// Stretch is used to generate an automatically resizing boundary around all elements of a specified type

export default function useStretch () {
    // useEffect(_ => { resizeBoundary(); }, states);
    // const [stretch, setStretch] = useState({});
    function resizeBoundary(current) {
        let kei = { top: null, left: null, bottom: null, right: null };
        [...current.children].map(i => {
            const box = rect(i, true);
            for (let j in box) {
                if (["top", "left", "bottom", "right"].includes(j)) {
                    if ((["top", "left"].includes(j) && box[j] < kei[j]) ||
                        (["bottom", "right"].includes(j) && box[j] > kei[j]) ||
                        kei[j] === null
                    ) kei[j] = box[j];
                }
            }
        });
        kei = { top: kei.top + "px", left: kei.left + "px", width: kei.right - kei.left + "px", height: kei.bottom - kei.top + "px" };
        setStretch(s => kei);
    }

    return {
        resize: resizeBoundary,
        stretch: stretch
    }
}