// import {firebase} from "./firebase";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { collection, query, where, getDocs } from "firebase/firestore";

export async function getAllDatainPost(){
    const db = await  getFirestore();
    const querySnapshot = await getDocs(collection(db, "posts"));
    let data = {}
    querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data();
    });
    return await data;
}