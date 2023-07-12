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

const recursiveBinarySearch = <T>(array: Array<T>, term: T, bottom: number, top: number): number => {
  if(bottom <= top && top >= bottom) {
    const middle = Math.floor( ( bottom + top ) / 2 )
    if(array[middle] === term) return middle
    if(array[middle] > term) return recursiveBinarySearch(array, term, bottom, middle - 1) 
    if(array[middle] < term) return recursiveBinarySearch(array, term, middle + 1, top)
  }

  return -1
}

console.log(recursiveBinarySearch(testArray, term, 0, testArray.length -1) === correctIndex)
console.log(recursiveBinarySearch(testFalsy, termFalsy, 0, testFalsy.length -1) === -1 )

console.log("caution at calculating indices")
