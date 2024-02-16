import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './reducers/loginReducer.js';
import { userReducer } from './reducers/userReducer.js';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: true 
})

export default store;