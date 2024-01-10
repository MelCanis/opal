import { useState } from "react";

export default function useZoom () {
    const [scale, setScale] = useState(.7);
    return {
        zoom: e => {
            const up = e.deltaY < 0;
            const increment = up ? .10 : (-.10);
            if ((scale > 1 && up) || (!up && scale < .5)) return;
            setScale(s => scale + increment);
        },
        scale: { transform: ` scale(${scale})` } 
    }
}