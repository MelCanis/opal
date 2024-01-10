import { useRef } from "react";
import session from "../../../data/session";
import useDrag from "../drag";
import useZoom from "../zoom";
import "./index.sass";
import { rect } from "../../room-tools/rect";

export default function Environment ({children}) {
    const boundary = useRef(), secondaryBoundary = useRef();
    const { refresh } = session(s => s);
    const { drag } = useDrag(secondaryBoundary);
    const { scale, zoom } = useZoom();
    
    return (
        <div className="boundary"
            ref={boundary}
            onWheel={e => zoom(e)}
            onDoubleClick={e => refresh()}
            onMouseDown={e => { drag(e, boundary, secondaryBoundary) }}
        >
            <div className="secondaryBoundary" style={scale}
                ref={secondaryBoundary}
                onMouseDown={e => e.stopPropagation()}
            >
                {children.map((El, n) => (<El key={n} callback={e => drag(e, secondaryBoundary)} />) ) }
            </div>
        </div>
    )
}