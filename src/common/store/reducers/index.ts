import { produce } from 'immer'

type countState = Readonly<number>
type Action = {
  type: string
}

const reducer = produce((draft: countState = 0, action: Action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return draft + 1
    default:
      return draft
  }
})

export default reducer
