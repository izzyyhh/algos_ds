import { SingleLinkedList } from "./single_linked_list"

const list = new SingleLinkedList<number>();

list.append(1)
const getFirst = list.get(0)
console.log(list.length)
console.log(getFirst)


