export const world = 'world'

export const start = async (hello: string): Promise<void> => {
  console.log(hello + world)
}

void start('hello')
