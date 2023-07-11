const linearSearch = <T>(array: Array<T>, term: T) => {
  for(let index = 0; index < array.length; index++) {
    if(array[index] === term) return index
  }

  return -1 
}


const testArray = [1,2,3,3,5]
const term = 3
const correctIndex = 2
const result = linearSearch(testArray, term)
console.log(correctIndex === result)

