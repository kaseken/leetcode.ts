import { isSubsequence } from './isSubsequence';

test('Test isSubsequence', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  expect(isSubsequence('ahbgdc', 'ahbgdc')).toBe(true);
  expect(isSubsequence('', 'ahbgdc')).toBe(true);
  expect(isSubsequence('', '')).toBe(true);
  expect(isSubsequence('abc', '')).toBe(false);
  expect(isSubsequence('xbc', 'ahbgdc')).toBe(false);
  expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  expect(isSubsequence('abx', 'ahbgdc')).toBe(false);
});
