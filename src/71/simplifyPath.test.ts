import { simplifyPath } from './simplifyPath'

test('Test simplifyPath', () => {
  expect(simplifyPath('/home/')).toBe('/home')
  expect(simplifyPath('/home//foo/')).toBe('/home/foo')
  expect(simplifyPath('/home/user/Documents/../Pictures')).toBe('/home/user/Pictures')
  expect(simplifyPath('/../')).toBe('/')
  expect(simplifyPath('/.../a/../b/c/../d/./')).toBe('/.../b/d')
})
