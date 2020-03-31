import { produce } from 'immer'

type countState = Readonly<number>
type Action = {
  type: string
}

const reducer = (state: countState = 0, action: Action): number => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + 1
  }
  return state
}

export default reducer
