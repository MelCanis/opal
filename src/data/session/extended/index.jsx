import { create } from "zustand";
import session from "..";
import { directoryToolStore } from "../../../utils/directory";
import { Item } from "../../classes";
import { convert, update } from "../../firebase/firestore";


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
    createItems: async x => {
        //!TODO Create a validation process, i.e. if the first line has a tab return error
        // let split = x.split('\n'), items = []
        // split.includes('') ? split.forEach(i => {
        //     i.slice(0, 1) == "\t" && items.push(new Item(session.getState().realm.id, items[items.length - 1].id, i.slice(2, i.length), "", ""))
        //     i != "" && items[items.length-1].push(i)
        //     i == "" && items.push([])
        // }) : split.forEach(i => items.push([i]))
        // split.map(i => i == '')
        // console.log(items)
        let lines = x.split("\n"), newItems = []
        lines.forEach((i, n) => {
            let content = x => x.slice(0, 1) == "\t"
            !content(i) && newItems.push(new Item(session.getState().realm.id, session.getState().item.id, i, "", ""))
            if (content(i)) { newItems[newItems.length - 1].content += (i.slice(1, i.length) + (content(lines[n+1]) ? '\n' : ''))}
        })
        let attributes = session.getState().item.template.length > 0 ? session.getState().item.template.map(i => ({ ...i, content: "" })) : []
        for await (let i of newItems) {
            i.attributes = attributes;
            await update(session.getState().user, "items", i.id, convert(i));
        }
        session.getState().changeItem("content", "")
        session.getState().refresh(true)
    },
}))