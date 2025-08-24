export const world = "World!!!";



export const start = (hello: string): void => {
  console.log(hello + ' ' + world)
}

export function add (a: number, b: number): number {
  return a + b
}

start('hello ')
