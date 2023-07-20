interface ISingleLinkedListNode<T> {
  value: T;
  next?: ISingleLinkedListNode<T> | null;
}

interface ISingleLinkedList<T> {
  head?: ISingleLinkedListNode<T> | null;
  tail?: ISingleLinkedListNode<T> | null;
  length: number;
  append?: (value:T) => void;
  delete?: (index: number) => void;
  get?: (index: number) => T | null;
  pop?: () => ISingleLinkedListNode<T> | null;
  shift?: () => ISingleLinkedListNode<T> | null;
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


 pop() {
   if(this.tail && this.head) {
     const target = this.tail
     let prevNode = this.head
     let index = 0

     while(index != this.length - 2 && prevNode.next) {
         prevNode = prevNode.next
	 index++
     }

     prevNode.next = null
     this.tail = null

     this.length -= 1
     return target 
   }
   return null
 }

 shift(){
   if(this.head){
     this.length = this.length - 1
     const currentHead = this.head;
     if(currentHead.next && currentHead.next != currentHead ) {
	this.head = currentHead.next;
	return currentHead
     } else {
	this.head = null
	return currentHead
     }
   } else {
	return null
   }
 }
 
 delete(index: number){
   if(index === 0 ) {
     this.shift()
     return
   }

   if(index === this.length - 1) {
     this.pop()
     return
   }

   if(index < this.length && index > 0) {
     let prevNode: ISingleLinkedListNode<T> | null = null
     let nextNode: ISingleLinkedListNode<T> | null = null
     let targetNode:ISingleLinkedListNode<T> | null = null
     let currentNode: ISingleLinkedListNode<T> | undefined | null = this.head 
     let i = 0
     

     while(i < this.length && i <= index + 1 && currentNode) {
	if(i === index - 1) {
          prevNode = currentNode
	} else if(i === index) {
          targetNode = currentNode
	} else if(i === index + 1) {
          nextNode = currentNode
	}
	i++
	currentNode = currentNode.next
     }

     if(prevNode && nextNode) {
	prevNode.next = nextNode
     } else if(prevNode) {
	prevNode.next = null
     }
     
     this.length -= 1
   }

   return
 }
}
