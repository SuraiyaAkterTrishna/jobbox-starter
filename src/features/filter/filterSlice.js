import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter : "first"
  }
  
  const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      filterJob: (state, action) => {
        if(state.filter !== action.payload){
            state.filter = action.payload
        }
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { filterJob } = filterSlice.actions;
  
  export default filterSlice.reducer;
