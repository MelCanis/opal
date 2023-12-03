import { useEffect, useMemo, useRef, useState } from "react";

export default function useTyping (callback, ms) {
    const [ticker, setTicker] = useState(null);
    const [count, setCount] = useState(0)
    const firstLoad = useRef(true);
    useEffect(_ => {
        if (firstLoad.current) { firstLoad.current = false; return }
        if (count > 0) {
            setTicker(setTimeout(_ => { setCount(c => 0) }, ms ? ms : 1500));
            return;
        }
        callback();
    }, [count]);

    return { tick: _ => { clearTimeout(ticker); setCount(c => c + 1) } }
}