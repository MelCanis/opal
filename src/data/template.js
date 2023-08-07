import { Item, Realm } from "./classes";

export let userdata = {
    username: "New User",
    realms: [new Realm()],
    items: [new Item(
        null, null, "New Item", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png",
        "This is an 'Item'. It operates as a note.\nThere are many things that you can do with it. & it's capabilities scale with how much you desire to do with it."
    )],
}

userdata.items[0].realm = userdata.realms[0].id;