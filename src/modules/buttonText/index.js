// initialState
const initialState = {
  text: "最初のテキスト",
  flag: true
}

// reducer
export const buttonText = (state = initialState, action) => {
  switch(action.type) {
    case 'TEXT_CHANGE':
      return { ...state, }
    default:
      return state
  }
}

// Action Creator
export const buttonTextChange = () => {
  return {
    type:  'TEXT_CHANGE'
  }
}
