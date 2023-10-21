import { getFirestore, collection, addDoc, getDocs, getDoc, doc, setDoc, query, where, deleteDoc } from "firebase/firestore";
import { app } from "..";

import { addUser, checkUser } from "./user";

export function convert (x) {
    const y = JSON.stringify(x);
    return JSON.parse(y);
}

const db = getFirestore(app);

export function update (x, y, z, a) {
    const b = doc(collection(x, y), z);
    setDoc(b, a, {merge: true});
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


export { db, addUser, checkUser };