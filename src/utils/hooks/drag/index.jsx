import { useEffect, useState } from "react";
import { rect } from "../../room-tools/rect";
import { toHundreth } from "../../math";
import useStretch from "./stretch";


export default function useDrag () {
    const originalmousestate = {
        mousedown: false,
        origin: { x: null, y: null },
        targetorigin: { x: null, y: null },
        change: { x: null, y: null },
        target: null,
        bound: null,
        bounded: false,
    }, [mousestate, setMousestate] = useState(originalmousestate);
    // const { resize, stretch } = useStretch(secondary);


    const drag = (e, bound, secondaryBound) => { // mousedown
        const target = secondaryBound?.current || e.target;
        setMousestate(s => ({
            ...mousestate,
            mousedown: true,
            origin: { x: e.clientX, y: e.clientY },
            target: target,
            targetorigin: rect(target, true),
            // stretchorigin: rect(stretchBoundary),
            targetoriginpercentage: !parseFloat(target.style.top) ? false : {
                top: parseFloat(target.style.top),
                left: parseFloat(target.style.left)
            },
            bound: bound,
            // bounded: bounded,
        }));
    }

    useEffect(_ => { //mouse state handler
        if (!mousestate.mousedown) return;
        window.addEventListener("mouseup", mouseup);
        window.addEventListener("mousemove", mousemove);
        return _ => {
            window.removeEventListener("mouseup", mouseup);
            window.removeEventListener("mousemove", mousemove);
        }
    }, [mousestate]);

    function mouseup() { // trigger reset
        setMousestate(s => originalmousestate);
        window.removeEventListener("mouseup", mouseup);
        window.removeEventListener("mousemove", mousemove);
    }
    function mousemove(e) { // handle drag location & boundary data
        const { target, targetorigin, targetoriginpercentage, bound, origin } = mousestate;
        const { top: boundtop, left: boundleft, width: boundwidth, height: boundheight } = rect(bound);

        const percentage = ({ x, y }) => ({ x: toHundreth(((x - boundleft) / boundwidth) * 100), y: toHundreth(((y - boundtop) / boundheight) * 100) });
        const originpercentage = percentage(origin), // mouseclick
            activepercentage = percentage({ x: e.clientX, y: e.clientY }), // active
            changepercentage = { x: toHundreth(activepercentage.x - originpercentage.x), y: toHundreth(activepercentage.y - originpercentage.y) };

        const { top, left } = targetoriginpercentage || { top: 0, left: 0 }
       
        target.style.top = top + changepercentage.y + "%";
        target.style.left = left + changepercentage.x + "%";
    }

    return { drag: drag }
}