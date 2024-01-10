import { create } from "zustand";
import { Item, Realm } from "../classes";
import { convert, deletion, find, findAll, findAll2, update } from "../firebase/firestore";

const session = create((set, get) => ({
    signedin: false,
    user: null,

    display: "loading",
    thoughtspace: true,
    realm: null,
    item: null,
    attributes: false,
    search: false,

    realmedit: false,
    editing: false,

    updated: true,

    findAll: findAll,

    set: (x) => set(s => x),
    setRealm: x => {
        set(s => ({ updated: false }));
        find(get().user, "realms", x).then(y => set(s => ({ realm: y, display: "grid", item: null, updated: true })))
    },
    openRealms: x => set(s => ({display: "realm", realm: null, item: null, realmedit: false, editing: false})),
    saveRealm: x => update(get().user, "realms", x, get().realm),
    getRealm: async x => { const y = await find(get().user, "realms", x); return y; },
    getRealms: async x => {const y = await findAll(get().user, "realms"); return y; },
    changeRealm: (x, y) => set(s => ({ realm: { ...get().realm, [x]: y }})),
    createRealm: () => {
        const newRealm = new Realm();
        set(s => ({realmedit: true, realm: convert(newRealm)}));
    },

    setItem: async x => {
        get().item && get().saveItem(get().item.id);
        set(s => ({updated: false}));
        if (!x) { set(s => ({ display: "grid", item: x, updated: true })); return; }
        const item = await find(get().user, "items", x), items = await get().getItems(x);
        set(s => ({ display: items.length > 0 ? "grid" : "editor", item: item, updated: true }));
    },
    getItem: async x => { const y = await find(get().user, "items", x); return y; },
    getItems: async (x, all) => {
        if (all) {
            const y = await findAll(get().user, "items", "realm", x);
            return y;
        }
        const y = x ? await findAll2(get().user, "items", "parent", x, "realm", get().realm.id) : await findAll2(get().user, "items", "parent", null, "realm", get().realm.id);
        return y;
    },

    changeItem: (x, y) => set(s => ({item: {...get().item, [x]: y}})),
    saveItem: x => update(get().user, "items", x, get().item), 
    createItem: x => {
        const newItem = new Item(get().realm.id, get().item? get().item.id : null, "", "", "");
        if (get().item?.template.length > 0) newItem.attributes = get().item.template.map(i => ({...i, content: ""}));
        update(get().user, "items", newItem.id, convert(newItem));
        get().setItem(newItem.id);
    },
    deleteItem: x => {
        set(s => ({updated: false}));
        recursiveDeletion(x).then(y => setTimeout(set(s => ({ updated: true })), 200));
        async function recursiveDeletion(id) {
            deletion(get().user, "items", id);
            let items = await get().getItems(id);
            items.forEach(item => {
                deletion(get().user, "items", item.id);
                recursiveDeletion(item.id);
            })
        }
    },
    deleteRealm: x => {
        deletion(get().user, "realms", x);
        findAll(get().user, "items", "realm", x).then(y => {
            y?.forEach(z => deletion(get().user, "items", z.id));
        })
    },

    refresh: x => {
        set(s => ({ updated: false }));
        setTimeout(_ => set(s => ({ updated: true })), 100);
    },
}))

export default session;