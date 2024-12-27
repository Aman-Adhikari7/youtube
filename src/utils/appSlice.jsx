import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name:"apps",
    initialState:{
        open:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.open=!state.open
        },
    },
})

export const {toggleSidebar} = appSlice.actions;
export default appSlice.reducer