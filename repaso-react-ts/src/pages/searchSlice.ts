
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    //Nombre del estado
    name: 'search',
    initialState: {
      character: {}
    },
    reducers: {
      addFindings: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      addSearch: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      deleteFindings: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      
    }
    
});

//exporto las ACCIONES.....
export const { addFindings, deleteFindings, addSearch  } = searchSlice.actions;

export const searchData = (state: any) => state.search;

export default searchSlice.reducer;