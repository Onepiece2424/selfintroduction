// initialState
const initialState = {
  flag: false
}

// reducer
export const friendModalFlag = (state = initialState, action) => {
  switch(action.type) {
    case 'FRIEND_MODALFLAG_CHANGE':
      return { ...state, flag: action.payload }
    default:
      return state
  }
}

// Action Creator
export const friendModalFlagChange = (value) => {
  return {
    type:  'FRIEND_MODALFLAG_CHANGE',
    payload: value
  }
}
