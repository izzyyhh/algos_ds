const floors = new Array(200)
const breakAt = 111

for(let i = 0; i < floors.length; i++) {
  floors[i] = i >= 111
}

function crystals(floors: Array<boolean>): number {
  const jumpSize = Math.floor(Math.sqrt(floors.length))
  let i = jumpSize

  for(; i < floors.length; i++) {
    if(floors[i]) break;
  }

  i -= jumpSize

  for(let j = 0; j <= jumpSize; j++) {
    if(floors[i]) return i
    else i+= 1
  }
  
  return -1
}

const testResult = crystals(floors)
console.log(testResult === breakAt)

console.log(floors[testResult -1])
