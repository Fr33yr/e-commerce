import { createSlice } from "@reduxjs/toolkit";

export const SearchEmptyState = [] as IData[] 
 
export const searchSlice = createSlice({
    name: 'search',
    initialState: SearchEmptyState,
    reducers:{
        searchResults: (state, action) => action.payload,
        resetSearch: ()=> SearchEmptyState
    }
})

export const { searchResults, resetSearch} = searchSlice.actions
export default searchSlice.reducer