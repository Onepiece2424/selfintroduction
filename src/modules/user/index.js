// initialState
const initialState = {
  name: "さとる",
  job: "スーパーサラリーマン/デビルハンター",
  age: 30,
  bloodType: "A",
  useBicycle: false,
  favoriteColor: "ff0000",
  birthday: "1993-02-21",
  email: "satoru@gmail.com",
  physicalStrength: "50"
}

// reducer
export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'CLEAR_USER_INFO':
      return initialState
    case 'UPDATE_USER_INFO':
      return { ...state, name: action.payload }
    case 'UPDATE_JOB':
      return { ...state, job: action.payload }
    case 'UPDATE_AGE':
      return { ...state, age: action.payload }
    case 'UPDATE_BLOODTYPE':
      return { ...state, bloodType: action.payload }
    case 'UPDATE_USEBICYCLE':
      return { ...state, useBicycle: action.payload }
    case 'UPDATE_FAVORITECOLOR':
      return { ...state, favoriteColor: action.payload }
    case 'UPDATE_BIRTHDAY':
      return { ...state, birthday: action.payload }
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload }
    case 'UPDATE_PHYSICALSTRENGTH':
      return { ...state, physicalStrength: action.payload }
    default:
      return state
  }
}

// Action Creator
export const clearUserInfo = () => {
  return {
    type:  'CLEAR_USER_INFO'
  }
}

export const createUserInfo = (e) => {
  return {
    type:  'UPDATE_USER_INFO',
    payload: e.target.value
  }
}

export const updateJob = (e) => {
  return {
    type:  'UPDATE_JOB',
    payload: e.target.value
  }
}

export const updateAge = (e) => {
  return {
    type:  'UPDATE_AGE',
    payload: e.target.value
  }
}

export const updateBloodType = (e) => {
  return {
    type:  'UPDATE_BLOODTYPE',
    payload: e.target.value
  }
}

export const updateUseBicycle = (e) => {
  return {
    type:  'UPDATE_USEBICYCLE',
    payload: e.target.checked
  }
}

export const updateFavoriteColor = (e) => {
  return {
    type:  'UPDATE_FAVORITECOLOR',
    payload: e.target.value
  }
}

export const updateBirthday = (e) => {
  return {
    type:  'UPDATE_BIRTHDAY',
    payload: e.target.value
  }
}

export const updateEmail = (e) => {
  return {
    type:  'UPDATE_EMAIL',
    payload: e.target.value
  }
}

export const updatePhysicalStrength = (e) => {
  return {
    type:  'UPDATE_PHYSICALSTRENGTH',
    payload: e.target.value
  }
}
