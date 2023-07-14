function BubbleSort(array: Array<number>): Array<number> {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
         const tmp = array[j]
	 array[j] = array[j + 1]
	 array[j + 1] = tmp
      }
    }
  }
  return array
}

console.log(BubbleSort([1,2,4,3,2,0,1,2,8,5,3,4,5]))

