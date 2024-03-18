import { create } from "zustand";
import { Tag } from "../../classes";
import session from "..";
import { update } from "../../firebase/firestore";

export const sessionSecondary = create((set, get) => ({
    secondary: "",
    children: [],
    tags: [],
    display: {},


    getSecondary: async x => { const y = await find(get().user, "secondary", x); return y; },
    setSecondary: x => {
        
    },

    addTag: x => set(s => ({tags: [...get().tags, new Tag(x)]})),
    changeTag: (id, x) => set(s => ({tags: get().tags.map((i) => id == i.id ? {...i, ...x} : i)})),
    deleteTag: x => set(s => ({tags: get().tags.filter(({id}) => x != id)})),
    getPossibleAttributes: () => {
        const possible = []
        get().children.forEach(({attributes}) => attributes.forEach(({type, title}) => {
            !possible.find(i => i.title == title && i.type == type) && possible.push({title: title, type: type, selected: false})
        }))
        return possible
    },
    saveTag: x => update(get().user, "secondary", x, y ? y : get().item),

    set: x => set(s => x)
}))