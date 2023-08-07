import { create } from "zustand";
import { userdata } from "../template";
import { Item, Realm } from "../classes";

const session = create((set, get) => ({
    display: "realm",
    realm: null,
    item: null,
    attributes: false,
    realmedit: false,

    updated: false,

    set: (x) => set(s => x),
    setRealm: x => set(s => ({realm: userdata.realms.find(({id}) => id == x), display: "grid"})),
    openRealms: x => set(s => ({display: "realm", realm: null, item: null, realmedit: false})),
    saveRealm: x => Object.assign(userdata.realms.find(({id}) => id == get().realm.id), get().realm),
    getRealm: x => userdata.realms.find(({id}) => id == x),
    getRealms: x => userdata.realms,
    changeRealm: (x, y) => set(s => ({realm: {...get().realm, [x]: y}})),
    createRealm: () => {
        const newRealm = new Realm();
        userdata.realms.push(newRealm);
        set(s => ({realmedit: true, realm: newRealm}));
    },

    setItem: x => {
        get().item && get().saveItem();
        !x ? set(s => ({display: "grid", item: x})) :
        set(s => ({display: (get().getItems(x).length > 0 ? "grid" : "editor"), item: userdata.items.find(({id}) => id == x), updated: true}));
    },
    getItem: x => userdata.items.find(({id}) => id == x),
    getItems: x => x ? userdata.items.filter(i => i.parent == x) : userdata.items.filter(i => i.realm == get().realm.id && !i.parent),

    changeItem: (x, y) => set(s => ({item: {...get().item, [x]: y}})),
    saveItem: x => Object.assign(userdata.items.find(({id}) => id == get().item.id), get().item),
    createItem: x => {
        const newItem = new Item(get().realm.id, get().item?.id, "", "", "");
        if (get().item.template.length > 0) newItem.attributes = get().item.template.map(i => ({...i, content: ""}));
        userdata.items.push(newItem);
        get().setItem(newItem.id);
    },
}))

export default session;