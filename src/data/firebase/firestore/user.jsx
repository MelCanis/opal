import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { Item, Realm } from "../../classes";
import { db } from ".";

export async function addUser (x) {
    const users = collection(db, "users");
    const docTarget = doc(users, x.uid);
    setDoc(docTarget, {
        username: x.displayName,
        email: x.email,
    });
    const firstRealm = doc(collection(docTarget, "realms"), "firstrealm");
    setDoc(firstRealm, {...new Realm(), id: firstRealm.id});
    const firstItem = doc(collection(docTarget, "items"), "firstitem");
    setDoc(firstItem, {...new Item(
        null, null, "New Item", "https://opalbasic.netlify.app/assets/opal-96-444bf01b.png",
        "This is an 'Item'. It operates as a note.\nThere are many things that you can do with it. & it's capabilities scale with how much you desire to do with it."
    ), realm: firstRealm.id, id: firstItem.id
    });
    return docTarget;
}
export async function checkUser (x) {
    const user = doc(collection(db, "users"), x.uid);
    const userSnap = await getDoc(user);
    if (userSnap.exists()) return user;
    const newUser = await addUser(x);
    return newUser;
}