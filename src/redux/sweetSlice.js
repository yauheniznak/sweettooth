import { createSlice } from '@reduxjs/toolkit'

export const sweetSlice = createSlice({
    name: 'sweets',
    initialState :{
        selectedCategory:"ALL"
    },
    reducers: {
      filterCategory:(state,action)=>{
          state.selectedCategory=action.payload
      }
      
      
    },
  })
export const {filterCategory}=sweetSlice.actions;
export const getSelectedCategory=state=>state.sweets.selectedCategory;
export default sweetSlice.reducer
