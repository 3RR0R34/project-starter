import { getToDoData } from "./lib/firebase/api";
let store = []
async function appInit(){
    const toDos = await getToDoData();
    // Object.entries.values(toDos).forEach((toDo) => console.log(Object.keys))
    // to get the values from the object we use the Object.values(Object.keys(obj),Object.entries(obj))
    let store = [...Object.values(toDoes)];

    const key = "";
    const keys = Object.keys(toDos);
    const item = keys.find((item) => {
        if(item === searchFor){
            return item;
        }
    });
}

appInit();

/*
    RTDB returns object of object
    [objects]

*/