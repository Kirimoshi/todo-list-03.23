import {createSlice} from "@reduxjs/toolkit";
import {IUserList} from "../../interfaces/interfaces";

const initialState: IUserList = {
    names: [{ name: 'John Snow' }],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        UPDATE_USER_NAME: (state, {payload: {name}}) => {
            state.names = state.names.map((user) => { return { ...user, name: name } });
        },
    }
})

export const { UPDATE_USER_NAME } = userSlice.actions;

export default userSlice.reducer;