// initialState
const initialState = {
  text: "最初のテキスト",
  flag: true
}

// reducer
export const buttonText = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return { ...state, text: action.payload }
    default:
      return state
  }
}

// Action Creator
export const buttonTextChange = (payload) => {
  return {
    type:  'TEXT_CHANGE',
    payload: payload
  }
}
