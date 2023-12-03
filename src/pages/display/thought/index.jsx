import { useEffect, useRef, useState } from "react"
import "./index.sass"
import { rect, useRect } from "../../../utils/room-tools/rect";
import { randomNumberBetween, toHundreth } from "../../../utils/math";

function Dot ({callback}) {
    const style = useRef({ top: randomNumberBetween(10, 90) + "%", left: randomNumberBetween(10, 90) + "%" })
    return (
        <div className="dot"
            style={style.current}
            onMouseDown={callback}
        ></div>
    )
} 

const dots = [1, 2, 3, 4, 5];

export default function Thought () {
    const boundary = useRef(), pseudoBoundary = useRef();
    const boundaryRect = useRect(pseudoBoundary);
    const originalmousestate = {
        mousedown: false,
        origin: { x: null, y: null },
        targetorigin: { x: null, y: null },
        change: { x: null, y: null },
        target: null,
        bound: null,
        bounded: false,
        centered: false,
    }, [mousestate, setMousestate] = useState(originalmousestate);

    const bound = (ref, boundref) => {
        const { top, left, right, bottom } = rect(ref, true), { top: boundtop, left: boundleft, right: boundright, bottom: boundbottom } = rect(boundref, true);
        return { top: (top < boundtop), bottom: (bottom >= boundbottom), left: (left <= boundleft), right: (right >= boundright) };
    }
    const boundpercentage = (ref, boundref) => {
        const { top: targettop, left: targetleft, right: targetright, bottom: targetbottom } = rect(ref, true), { top: boundtop, left: boundleft, width: boundwidth, height: boundheight } = rect(boundref);
        const percentage = ({ x, y }) => ({ x: toHundreth(((x - boundleft) / boundwidth) * 100), y: toHundreth(((y - boundtop) / boundheight) * 100) });
        return {
            top: 100 - percentage({ x: targetleft, y: targettop }).y, bottom: percentage({ x: targetleft, y: targetbottom }).y,
            left: 100 - percentage({ x: targetleft, y: targettop }).x, right: percentage({ x: targetright, y: targettop }).x,
        }
    }

    const zoom = (e, ref, boundref) => {
        const up = e.deltaY < 0;
        const { width, height } = rect(ref), { width: boundwidth } = rect(boundref);
        if ((up && width >= boundwidth) || (!up && width <= 900) ) return;
        const increment = up ? 10 : (-10);
        ref.current.style.width = width + increment + "px";
        ref.current.style.height = height + increment + "px";
    }
    const drag = (e, bound, {centered, bounded} = {}) => { e.stopPropagation(); const { type } = e;
        const { top, left, width, height } = rect(e.target, true);
        setMousestate(s => ({
            ...mousestate,
            mousedown: true, origin: { x: e.clientX, y: e.clientY }, target: e.target, centered: centered, bound: bound,
            targetorigin: !centered ? { x: left, y: top } : { x: left + (width / 2), y: top + (height / 2) },
            bounded: bounded,
        }));
    }

    function mouseup () {
        setMousestate(s => originalmousestate);
        window.removeEventListener("mouseup", mouseup);
        window.removeEventListener("mousemove", mousemove);
    }
    function mousemove (e) {
        const { target, targetorigin, bound: boundary, change, centered } = mousestate;
        const { top: boundtop, left: boundleft, width: boundwidth, height: boundheight } = rect(boundary);
        const percentage = ({x, y}) => ({ x: toHundreth(((x - boundleft) / boundwidth) * 100), y: toHundreth(((y - boundtop) / boundheight) * 100) });
        
        const originpercentage = percentage(mousestate.origin), // mouseclick
        activepercentage = percentage({x: e.clientX, y: e.clientY}), // active
        changepercentage = { x: toHundreth(activepercentage.x - originpercentage.x), y: toHundreth(activepercentage.y - originpercentage.y) },
        targetpercentage = percentage(targetorigin);

        // console.log(boundpercentage(target, boundary))

// if the edge of the target is attempting to exit the boundary, the target position equals the furthermost position to the boundary

        const up = activepercentage.y < change.y, down = activepercentage.y > change.y, left = activepercentage.x < change.x, right = activepercentage.x > change.x;
        setMousestate(ms => ({...ms, change: { ...activepercentage }}));
        
        const boundaries = bound(target, boundary.current), hit = { right: right && boundaries.right, left: left && boundaries.left, up: up && boundaries.top, down: down && boundaries.bottom };
        const half = { x: toHundreth(((rect(target, true).width * .5) / boundwidth) * 100), y: toHundreth(((rect(target, true).height * .5) / boundheight) * 100) };
        
        console.log(up, hit.up, half.y, centered)
        // console.log({half})
        // console.log(targetpercentage.y, changepercentage.y);
        // console.log(target.style.top, target.style.left)

        target.style.top = boundaries.top ? half.y+"%" /* : hit.bottom ? ("") */ : targetpercentage.y + changepercentage.y + "%";
        target.style.left = targetpercentage.x + changepercentage.x + "%";
    }
    useEffect(_ => {
        if (!mousestate.mousedown) return;
        window.addEventListener("mouseup", mouseup);
        window.addEventListener("mousemove", mousemove);
        return _ => {       
            window.removeEventListener("mouseup", mouseup);
            window.removeEventListener("mousemove", mousemove);
        }
    }, [mousestate]);

    return (
        <div className="Thought display">
            <div className="boundary" ref={boundary} onWheel={e => zoom(e, pseudoBoundary, boundary)}>
                <div className="pseudoBoundary" ref={pseudoBoundary}
                onMouseDown={ e =>  drag(e, boundary, {centered: true, bounded: true}) }
                >
                    {boundaryRect && dots.map((i, n) => <Dot key={n} callback={ e => drag(e, pseudoBoundary) } />) }
                </div>
            </div>
        </div>
    )
}