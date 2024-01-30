import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    loggedInUser: {
        id: "",
        firstName: "",
        lastName: " ",
        email: "",
        password: ""
    },
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedInUserData: (state, action) => {
            state.loggedInUser = action.payload



        }

    }
})

export const { setLoggedInUserData } = loginSlice.actions
export default loginSlice.reducer