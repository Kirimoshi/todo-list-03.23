import todoReducer, {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO
} from "../redux/reducers/todoReducer";

const initialState = {
    todos: [],
}

const state = {
    todos: [
        {task: 'First task', id: '1', completed: false},
        {task: 'Second task', id: '2', completed: true},
        {task: 'Third task', id: '3', completed: false},
    ]
}

describe('todoSlice', () => {
    it('should return default state when passed an empty action', function () {
        const result = todoReducer(undefined, {type: ''});
        expect(result).toEqual(initialState);
    });

    it('should add new task', function () {
        const action = { type: ADD_TODO.type, payload: {task: 'New task', id: '1', completed: false} };
        const result = todoReducer(initialState, action);
        expect(result.todos).toEqual([action.payload]);
    });

    it('should delete a task', function () {
        const action = { type: DELETE_TODO.type, payload: {todoId: '2'} };
        const result = todoReducer(state, action);
        expect(result.todos).toEqual([
            {task: 'First task', id: '1', completed: false},
            {task: 'Third task', id: '3', completed: false},
        ]);
    });

    it('should edit a task', function () {
        const action = { type: EDIT_TODO.type,
                         payload: { editedTodo: { task: 'Edited first task', id: '1', completed: false } } };
        const result = todoReducer(state, action);
        expect(result.todos).toEqual([
            action.payload.editedTodo,
            {task: 'Second task', id: '2', completed: true},
            {task: 'Third task', id: '3', completed: false},
        ]);
    });

    it('should toggle task activity status', function () {
        const action = { type: TOGGLE_TODO.type, payload: { todoId: '2' } };
        const result = todoReducer(state, action);
        expect(result.todos).toEqual([
            {task: 'First task', id: '1', completed: false},
            {task: 'Second task', id: '2', completed: false},
            {task: 'Third task', id: '3', completed: false},
        ]);
    });
});