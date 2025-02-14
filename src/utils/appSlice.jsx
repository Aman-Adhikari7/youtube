import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name:"apps",
    initialState:{
        open:true,
        vedio:[],
        category:'All'
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.open=!state.open
        },
        setVedio:(state,action)=>{
            state.vedio = action.payload
        },
        setCategory:(state,action)=>{
            state.category=action.payload
        }
    },
})

export const {toggleSidebar ,setVedio,setCategory} = appSlice.actions;
export default appSlice.reducer