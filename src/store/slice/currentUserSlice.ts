import {createSlice} from "@reduxjs/toolkit";
import { initializeInformation} from "../../_chicken/utils/function";
import {Information} from "../../_chicken/utils/interface";

export interface CurrentUserState {
    logIn: boolean
    information: Information
}

const initialState: CurrentUserState = {
    logIn: false,
    information: initializeInformation()
};

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        logInFake: (state) => {
            state.logIn = true;
        },
        logOutFake: (state) => {
            state.logIn = false;
        },
    },
});

export const { logInFake, logOutFake, } = currentUserSlice.actions

export default currentUserSlice.reducer
