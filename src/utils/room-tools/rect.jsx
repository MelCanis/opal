import { useEffect, useMemo, useState } from "react";

export function rect ( ref, notref ) {
    return notref ? ref.getBoundingClientRect() : ref.current.getBoundingClientRect();
}

export function useRect (ref) {
    const [ rectangle, setRect ] = useState({});
    
    useMemo(_ => { if (!ref.current) return;
        setRect(rect(ref));
    }, [ref]);

    return rectangle;
}