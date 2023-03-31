import {ITodoList} from "../../interfaces/interfaces";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ITodoList = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD_TODO: (state, {payload: {task, id, completed}}) => {
            state.todos.push({id, task, completed})
        },
        DELETE_TODO: (state, {payload: {todoId}}) => {
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        EDIT_TODO: (state, {payload: {editedTodo}}) => {
            state.todos = state.todos.map((todo) => todo.id === editedTodo.id ? editedTodo : todo);
        },
        TOGGLE_TODO: (state, {payload: {todoId}}) => {
            state.todos = state.todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        },
    }
})

export const { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } = todoSlice.actions;

export default todoSlice.reducer;