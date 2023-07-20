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

const list2 = new SingleLinkedList<number>()
list2.append(1)
list2.append(2)
list2.append(3)
list2.append(4)

list2.insert(10, 0)

console.log(list2.get(0) === 10)
console.log(list2.get(1) === 1)
console.log(list2.get(2) === 2)

list2.insert(11, 11) // prints out of bounds
list2.insert(20, 1)

console.log(list2.get(1) === 20)
console.log(list2.get(0))
console.log(list2.get(2))
console.log(list2.get(3))
