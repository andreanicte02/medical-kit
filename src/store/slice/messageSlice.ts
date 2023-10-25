import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface MessageState{
    successMessage:string | undefined
    errorMessage:string | undefined

}

const initialState:MessageState={
    successMessage:undefined,
    errorMessage: undefined
}

export const messageSlice =createSlice({
    name:'userSessionRedux',
    initialState,
    reducers:{
        setSuccessMessage:(state, action:PayloadAction<string>)=>{
            state.errorMessage=undefined
            state.successMessage=action.payload;
        },
        cleanSuccessMessage:(state)=>{
            state.successMessage=undefined
        },
        setErrorMessage:(state, action:PayloadAction<string>)=>{
            state.successMessage=undefined
            state.errorMessage=action.payload;
        },
        cleanErrorMessage:(state)=>{
            state.errorMessage=undefined
        },
        cleanMessage:(state)=>{
            state.successMessage=undefined
            state.errorMessage=undefined
        }
    }
})

export const {setSuccessMessage,cleanSuccessMessage, cleanErrorMessage, setErrorMessage, cleanMessage} = messageSlice.actions;
export default  messageSlice.reducer;