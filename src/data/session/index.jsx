import { create } from "zustand";
import { userdata } from "../template";
import { Item, Realm } from "../classes";
import { convert, find, findAll, findAll2, update } from "../firebase/firestore";

const session = create((set, get) => ({
    signedin: false,
    user: null,

    display: "signin",
    realm: null,
    item: null,
    attributes: false,
    realmedit: false,

    updated: true,

    findAll: findAll,

    set: (x) => set(s => x),
    setRealm: x => {
        find(get().user, "realms", x).then(y => set(s => ({realm: y, display: "grid"})))
    },
    openRealms: x => set(s => ({display: "realm", realm: null, item: null, realmedit: false})),
    saveRealm: x => update(get().user, "realms", x, get().realm),
    getRealm: async x => { const y = await find(get().user, "realms", x); return y; },
    getRealms: async x => {const y = await findAll(get().user, "realms"); return y; },
    changeRealm: (x, y) => set(s => ({realm: {...get().realm, [x]: y}})),
    createRealm: () => {
        const newRealm = new Realm();
        // update(get().user, "realms", newRealm.id, convert(newRealm));
        set(s => ({realmedit: true, realm: convert(newRealm)}));
    },

    setItem: async x => {
        get().item && get().saveItem(get().item.id);
        set(s => ({updated: false}))
        if (!x) { set(s => ({ display: "grid", item: x, updated: true })); return; }
        find(get().user, "items", x).then(y => {
            get().getItems(x).then(z => {
                set(s => ({ display: z.length > 0 ? "grid" : "editor", item: y, updated: true }));
            })
        })
    },
    getItem: async x => { const y = await find(get().user, "items", x); return y; },
    getItems: async x => {
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



}))

export default session;