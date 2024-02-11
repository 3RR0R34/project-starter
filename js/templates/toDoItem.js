import { toElement } from "./../utils/toElement";

function toDoItemTemplate (todo){
    const template = `
    <section class="bg-zinc-50 border-1-4 shadow-sm p-4">
    ${todo}
  </section>`;
  return toElement(template);
}

export {toDoItemTemplate};