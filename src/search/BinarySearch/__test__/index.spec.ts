import binarySearch from ".."

describe('binarySearch', () => {
  it('normal case', () => {
    expect(binarySearch([0, 1, 2, 3, 4, 5], 2)).toBe(2)
  })

  it('no in array', () => {
    expect(binarySearch([0, 1, 2, 3, 40, 50], 44)).toBe(-1)
  })

  it('out range of array', () => {
    expect(binarySearch([0, 1, 2, 3, 40, 50], 44)).toBe(-1)
  })
}) 