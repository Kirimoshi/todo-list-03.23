import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        users: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;