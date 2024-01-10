const toPercentage = (x, y) => {
    const { left, top, width, height } = rect(boundary);
    return y == "x" ? toHundreth(x / (left + width) / .01) : toHundreth(x / (top + height) / .01);
};
const boundonmove = ({ x, y }, origin) => {
    const { top, left, right, bottom } = rect(boundary), { top: origintop, left: originleft, right: originright, bottom: originbottom } = origin;
    const wall = {
        top: (top - origintop), bottom: (bottom - originbottom), left: (left - originleft), right: (right - originright)
    }
    const hit = {
        top: y <= wall.top,
        bottom: y >= wall.bottom,
        left: x <= wall.left,
        right: x >= wall.right
    }
    return {
        x: hit.left ? wall.left : hit.right ? wall.right : x,
        y: hit.top ? wall.top : hit.bottom ? wall.bottom : y,
    }
}

if (bounded) {
    const change = { x: e.clientX - origin.x, y: e.clientY - origin.y };
    const { x, y } = boundonmove( change, stretchorigin );
    const changepercentage =
    target.style.top = top + toPercentage(y, "y") + "%";
    target.style.left = left + toPercentage(x, "x") + "%";
    return;
}