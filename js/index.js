import { getToDoData } from "./lib/firebase/api";

async function appInit(){
    const toDos = await getToDoData();
    console.log(Object.keys)
    // const toDoList
}

appInit();

/*
    RTDB returns object of object
    [objects]

*/