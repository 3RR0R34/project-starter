import {ref,child,get} from "firebase/database";

import {db} from "./../../config/firebase/firebaseInit";
/*
1. connect to do list
    reference ref
    const dbRef = ref(db, "/todos")
*/
async function getToDoData(){
const dbRef = ref(db, "/todos")

const dataSnapshot = await get(dbRef);

 return await dataSnapshot.val();
}
export {getToDoData}