import { create } from "zustand";
import session from "..";
import { directoryToolStore } from "../../../utils/directory";


export const sessionExtended = create((set, get) => ({
    combine: x => {
        const newParentID = session.getState().createItem("New Item Collection").id;
        x.forEach((i) => {
            session.getState().getItem(i).then(item => session.getState().saveItem(i, { ...item, parent: newParentID }))
        })
        session.getState().setItem(newParentID)
        directoryToolStore.getState().set({selected: []})
    },
    send: (x, y) => {
        console.log("1", x, y)
        const refresh = _ => {
            session.getState().setItem(session.getState().item?.id)
            setTimeout(_ => directoryToolStore.getState().set({ selected: [], dragging: [], dropping: null }), 100)
        }
        x.forEach((i, n) => {
            session.getState().getItem(i).then(item => session.getState().saveItem(i, { ...item, parent: y == "false" ? null : y }))
            n == x.length - 1 && refresh()
        })
    },
    deleteMultiple: x => {
        x.forEach((i, n) => session.getState().deleteItem(i, n != x.length-1 && true))
        directoryToolStore.getState().set({ selected: [] })
    },
}))