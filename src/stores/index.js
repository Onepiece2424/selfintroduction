import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { user } from "../modules/user";
import { buttonText } from "../modules/buttonText";
import { modalFlag } from "../modules/modalFlag";
import { modalText } from "../modules/modalText";



// combineReducersの作成
const reducer = combineReducers({
  form: reduxFormReducer,
  user,
  buttonText,
  modalFlag,
  modalText
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
