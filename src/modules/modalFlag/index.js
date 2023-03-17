// initialState
const initialState = {
  flag: false
}

// reducer
export const modalFlag = (state = initialState, action) => {
  switch(action.type) {
    case 'MODALFLAG_CHANGE':
      return { ...state, flag: action.payload }
    default:
      return state
  }
}

// Action Creator
export const modalFlagChange = (value) => {
  return {
    type:  'MODALFLAG_CHANGE',
    payload: value
  }
}
