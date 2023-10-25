import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface DrawerState{
    open:boolean,
    selectedItem: number
}

const initialState: DrawerState={
    open:true,
    selectedItem: 0
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        handleOpen: (state) => {
            state.open = !state.open
        },
        selectItem:(state, action: PayloadAction<number>)=>{
            state.selectedItem=action.payload
        }
    },
})

export const { handleOpen, selectItem } = drawerSlice.actions

export default drawerSlice.reducer