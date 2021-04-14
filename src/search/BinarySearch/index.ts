
const binarySearch = (arr: number[], target: number): number => {
  let low = 0
  let high = arr.length - 1
  let mid: number
  while(low <= high) {
    mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > target) {
      high = mid - 1
    } else if (arr[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

export default binarySearch