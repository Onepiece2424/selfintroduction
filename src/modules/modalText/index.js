// initialState
const initialState = {
  flag: false
}

// reducer
export const modalText = (state = initialState, action) => {

  switch(action.type) {
    case 'MODAL_TEXT':
      return { ...state, flag: action.payload }
    default:
      return state
  }
}

// Action Creator
export const modalTextIndicate = (value) => {
  console.log(value)
  return {
    type:  'MODAL_TEXT',
    payload: value
  }
}
