import { createSlice } from '@reduxjs/toolkit'

export const businessSlice = createSlice({
  name: 'business',
  initialState: {
    search: '',
    viewedBussiness: {},
  },
  reducers: {
    searchBussiness: (state, action) => {
       state.search = action.payload
    },
  }
})

export const { searchBussiness } = businessSlice.actions

export default businessSlice.reducer