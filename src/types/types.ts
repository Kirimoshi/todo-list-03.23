import {ITodoItem} from "../interfaces/interfaces";

type TodoListProps = {
    todos: ITodoItem[];
    todoFilterValue: string;
    getEditTodo: (editTodo: ITodoItem) => void;
    setEditTodo: (editTodo: ITodoItem) => void;
    editTodo: ITodoItem | null;
};

type TodoItemProps = {
    todo: ITodoItem;
    editTodo: ITodoItem | null;
    getEditTodo: (editTodo: ITodoItem) => void;
    setEditTodo: (editTodo: ITodoItem) => void;
};

type FilterTodoProps = {
    getTodoFilterValue: (filterValue: string) => void;
};

type EditTodoProps = {
    editTodo: ITodoItem;
    setEditTodo: (editTodo: ITodoItem) => void;
};

export type { TodoListProps, TodoItemProps, FilterTodoProps, EditTodoProps };