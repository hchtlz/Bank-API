import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/loginReducer.js'

export default configureStore({
  reducer: {
    login: loginReducer,
  }
})