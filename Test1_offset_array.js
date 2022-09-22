function constructSubArray(array, startIdx, endIdx) {
  const result = []
  for (let idx = startIdx; idx < endIdx; idx++) {
    result.push(array[idx])
  }
  return result
}

// Time: O(n) - where n is the length of the array
// Space: O(n) - where n is the length of the array
function offsetArray(array, offset) {
  offset = offset % array.length
  if (array.length === 0 || offset === 0) return array

  const idx = offset < 0 ? Math.abs(offset) : array.length - offset

  const firstArray = constructSubArray(array, idx, array.length)
  const secondArray = constructSubArray(array, 0, idx)

  return firstArray.concat(secondArray)
}

const originalArr = [1, 2, 3, 4, 5]
console.log(originalArr)
console.log(offsetArray(originalArr, -9))
console.log(offsetArray(originalArr, 8))
