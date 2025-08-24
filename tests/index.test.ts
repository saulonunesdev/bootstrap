/* eslint-disable @typescript-eslint/no-magic-numbers -- test code  */
import { add, start, world } from '../src'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds -1 + -2 to equal -3', () => {
  expect(add(-1, -2)).toBe(-3)
})

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0)
})

test('start function logs correct message', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  start('Hello')
  expect(consoleSpy).toHaveBeenCalledWith('Hello ' + world)
  consoleSpy.mockRestore()
})

test('world constant is "World!!!"', () => {
  expect(world).toBe('World!!!')
})
