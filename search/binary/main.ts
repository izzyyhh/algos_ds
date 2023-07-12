const iterativeBinarySearch = <T>(array: Array<T>, term: T) => {
  let bottom = 0
  let top = array.length - 1

  while( bottom <= top && top >= bottom) {
   let middle = Math.floor( ( top + bottom ) / 2)

   if(term === array[middle]) return middle
    
    if(term > array[middle]){
      bottom = middle + 1
    } else {
      top = middle - 1
    }
  }

  return -1
}


const testArray = [1,2,3,3,5]
const term = 3
const correctIndex = 2
const result = iterativeBinarySearch(testArray, term)
console.log(correctIndex === result)

const testFalsy = [1,2,3,4,5,6,7,8]
const termFalsy = 9
const resultFalsy = iterativeBinarySearch(testFalsy, termFalsy)

console.log(resultFalsy === -1)
