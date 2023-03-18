import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { buttonText } from "../modules/buttonText";
import { friendModalFlag } from "../modules/friendModalFlag";
import { modalFlag } from "../modules/modalFlag";
import { modalText } from "../modules/modalText";
import { user } from "../modules/user";



// combineReducersの作成
const reducer = combineReducers({
  form: reduxFormReducer,
  friendModalFlag,
  buttonText,
  modalFlag,
  modalText,
  user
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
