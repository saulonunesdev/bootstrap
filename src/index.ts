export const world = 'World!!!!'

export const start = async (hello: string): Promise<void> => {
  console.log(hello + ' ' + world)
}

export function add (a: number, b: number): number {
  return a + b
}

void start('hello ')
