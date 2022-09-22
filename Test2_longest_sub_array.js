function createNumberIndices(array)
{
  const locations = {}

  for (let idx = 0; idx < array.length; idx++)
  {
    const currentNumber = array[idx]
    
    if (!(currentNumber in locations))
    {
      locations[currentNumber] = []
    }

    locations[currentNumber].push(idx)
  }

  return locations
}

function concatIndicesInSortedOrder(firstArr, secondArr)
{
  const result = []
  let firstIdx = 0
  let secondIdx = 0

  while (firstIdx < firstArr.length && secondIdx < secondArr.length)
  {
    if (firstArr[firstIdx] < secondArr[secondIdx])
    {
      result.push(firstArr[firstIdx])
      firstIdx++
    }
    else
    {
      result.push(secondArr[secondIdx])
      secondIdx++
    }
  }

  while (firstIdx < firstArr.length)
  {
    result.push(firstArr[firstIdx])
    firstIdx++
  }

  while (secondIdx < secondArr.length)
  {
    result.push(secondArr[secondIdx])
    secondIdx++
  }

  return result
}

function createPairConstructLongestArray(array, indices)
{
  let pair = []

  for (let idx = 0; idx < array.length; idx++)
  {
    const currentNumber = array[idx]
    const prevNumber = currentNumber - 1
    const nextNumber = currentNumber + 1

    const currentNumIndices = indices[currentNumber]
    const prevNumIndices = prevNumber in indices ? indices[prevNumber] : []
    const nextNumIndices = nextNumber in indices ? indices[nextNumber] : []

    const firstArrLength = currentNumIndices.length + prevNumIndices.length
    const secondArrLength = currentNumIndices.length + nextNumIndices.length
    const currentPairLength = pair.length ? indices[pair[0]].length + indices[pair[1]].length : 0

    if (firstArrLength > secondArrLength && firstArrLength > currentPairLength)
    {
      pair = [currentNumber, prevNumber]
    }
    else if (secondArrLength > firstArrLength && secondArrLength > currentPairLength)
    {
      pair = [currentNumber, nextNumber]
    }
  }

  return pair
}

// Time: O(n) - where n is the length of the array
// Space: O(n) - where n is the length of the array
function longestSubArray(array) {
  if (array.length < 2) return []

  if (array.length === 2)
  {
    if (Math.abs(array[0] - array[1]) <= 1) return array
    else return []
  }

  const indices = createNumberIndices(array)
  const pair = createPairConstructLongestArray(array, indices)
  const resultIndices = concatIndicesInSortedOrder(indices[pair[0]], indices[pair[1]])

  return resultIndices.map((idx) => array[idx])
}

console.log(longestSubArray([]))
console.log(longestSubArray([1, 2, 2, 0, 0, 0, 0]))

console.log(
  longestSubArray([1, 4, 4, 2, 2, 5, 5, 5, 3, 3, 5, -1, -2, -2, -1, -1, -2, 0]),
)
