import { SingleLinkedList } from "./single_linked_list"

const list = new SingleLinkedList<number>();


console.log("length", list.length)
list.append(1)
console.log("length", list.length)

const getFirst = list.get(0)
console.log(list.length)
console.log(getFirst)

const shifted = list.shift()
const getFirstAgain = list.get(0)

console.log("shifted", shifted)

console.log(getFirstAgain)

console.log("length", list.length)

console.log("deletion")
const list1 = new SingleLinkedList<number>();
list1.append(1)
list1.append(2)
list1.append(3)

list1.delete(1)
console.log(list1.get(1))
console.log(list1.get(0))
console.log(list1.get(2))




