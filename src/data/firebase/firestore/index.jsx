import { getFirestore, collection, getDocs, getDoc, doc, setDoc, query, where, deleteDoc } from "firebase/firestore";
import { app } from "..";

import { addUser, checkUser } from "./user";


/*
Better FireStore Explanation

db = the database (like the first doc)
structure goes: db > collection > doc > ... (more collections followed by docs)
collection(docid, collectionid), doc(collectoinid, docid):
returns a collection/doc ref if exists, create one if it doesn't
await setDoc(collectionref, data) : updates doc data
await getDoc(collectionref, data) : returns doc data

// doc(db, "collection id", "doc id") = doc(collection())


*/


export function convert (x) {
    const y = JSON.stringify(x);
    return JSON.parse(y);
}

const db = getFirestore(app);

export async function update (x, y, z, a) {
    const b = doc(collection(x, y), z);
    await setDoc(b, a, {merge: true});
    return "success"
}
export function deletion(x, y, z) {
    const b = doc(collection(x, y), z);
    deleteDoc(b);
}

export async function find (x, y, z) {
    const a = doc(collection(x, y), z);
    const b = await getDoc(a);
    return b.data();
}

export async function findAll (x, y, z, zz) {
    const a = await getDocs(!z ? collection(x, y) : query(collection(x, y), where(z, "==", zz)));
    let b = [];
    a.forEach(i => b.push(i.data()));
    return b;
}
export async function findAll2 (x, y, z, zz, zzz, zzzz) {
    const a = await getDocs(!z ? collection(x, y) : query(collection(x, y), where(z, "==", zz), where(zzz, "==", zzzz)));
    let b = [];
    a.forEach(i => b.push(i.data()));
    return b;
}

export function newCollection (x, y, z) {
    const users = collection(db, "users");
    const userref = doc(users, x);
    const newCollection = collection(userref, y)
    const firstDoc = doc(newCollection, z);
    return newCollection
    // setDoc(newCollection, { ...new Realm(), id: newCollection.id });
}


export { db, addUser, checkUser };