import { configureStore } from '@reduxjs/toolkit'
import businessSlice from './slices/businessSlice';


export default configureStore({
  reducer: {
    business: businessSlice,
  }
})