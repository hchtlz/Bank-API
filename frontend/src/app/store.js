import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducers/loginReducer.js'
import { userReducer } from './reducers/userReducer.js'

export default configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
})