import namor from 'namor'

const range = (len: any) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
          ? 'complicated'
          : 'single',
  }
}

export default function makeData(...lens: any) {
  const makeDataLevel = (depth = 0) => function () {

    const len = lens[depth]
    if (len) {
      return range(len).map((d: any) => {
        return {
          ...newPerson(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        }
      })
    }
    if (!len) { return null }
  }

  return makeDataLevel()
}
