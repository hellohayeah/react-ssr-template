import * as ACTION_TYPE from './action_type'

export const SUCCESS = {
  type: ACTION_TYPE.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPE.FAILURE
}

export const success = () => {
  return {
    type: ACTION_TYPE.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPE.FAILURE
  }
}

export const userInput = text => {
  return {
    type: ACTION_TYPE.USER_INPUT,
    payload: text
  }
}
