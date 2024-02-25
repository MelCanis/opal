export default function EventHandler () {
    return {
        events: (events, listener) => {
            let object = {};
            events.forEach(i => object[i] = listener)
            return object;
        }
    }
}