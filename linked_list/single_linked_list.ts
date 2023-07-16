interface ISingleLinkedListNode<T> {
  value: T;
  next?: ISingleLinkedListNode<T> | null;
}

interface ISingleLinkedList<T> {
  head?: ISingleLinkedListNode<T> | null;
  tail?: ISingleLinkedListNode<T> | null;
  length: number;
  append?: (value:T) => void;
  delete?: (node: ISingleLinkedListNode<T>) => void;
  get?: (index: number) => T | null;
}


export class SingleLinkedList<T> implements ISingleLinkedList<T> {
 head: ISingleLinkedListNode<T> | null
 tail: ISingleLinkedListNode<T> | null
 length = 0
 
 constructor() {
   console.log("created list")
 }

 append(value: T) {
  const newNode = { value: value, next: null}
  
   if(!this.head) {
       this.head = newNode
       this.tail = newNode
       this.head.next = this.tail
       
   } else {
     this.tail!.next = newNode
     this.tail = newNode
   }
   this.length++
 }

 get(index: number) {
   if(this.head && index <= this.length -1) {
     let count = 0
     if(index === 0) return this.head.value

     let currentNode = this.head
     while(currentNode.next) {
    	currentNode = currentNode.next
	count++
	if(count === index) return currentNode.value
     }

     return null

   } else {
     return null
   }
 }


}


