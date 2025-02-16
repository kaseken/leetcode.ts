import { removeElement } from './removeElement'

const testRemoveElement = (input: number[], target: number, expected: number[]) => {
  expect(removeElement(input, target)).toBe(expected.length)
  expect(input.slice(0, expected.length).sort()).toStrictEqual(expected.sort())
}

test('Test removeElement', () => {
  testRemoveElement([3, 2, 2, 3], 3, [2, 2])
  testRemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3])
  testRemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 0, [1, 2, 2, 3, 4, 2])
})
