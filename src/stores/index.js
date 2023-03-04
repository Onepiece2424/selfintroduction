import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { user } from "../modules/user";
import { product } from "../modules/product";


// combineReducersの作成
const reducer = combineReducers({
  form: reduxFormReducer,
  user,
  product,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
