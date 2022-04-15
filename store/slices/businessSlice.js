import { createSlice } from '@reduxjs/toolkit'

export const businessSlice = createSlice({
  name: 'business',
  initialState: {
    search: '',
    viewed: {},
  },
  reducers: {
    searchBussiness: (state, action) => {
       state.search = action.payload
    },
    viewedBusiness: (state, action) => {
      console.log("state", state.viewed)
       state.viewed = {...state.viewed, ...action.payload}
    }
  }
})

export const { searchBussiness, viewedBusiness } = businessSlice.actions

export default businessSlice.reducer