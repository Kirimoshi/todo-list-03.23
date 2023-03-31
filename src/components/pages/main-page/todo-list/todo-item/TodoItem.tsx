import {TodoItemProps} from "../../../../../types/types";
import { useDispatch } from "react-redux";
import {DELETE_TODO, TOGGLE_TODO} from "../../../../../redux/reducers/todoReducer";
// @ts-ignore
import styles from './TodoItem.module.css';

const TodoItem = ({todo,
                   editTodo,
                   getEditTodo,
                   setEditTodo}: TodoItemProps) => {
    const dispatch = useDispatch();

    const onToggleTodoChange = () =>
        dispatch(TOGGLE_TODO({ todoId: todo.id }));

    const handleDeleteTodoClick = () => {
        dispatch(DELETE_TODO({ todoId: todo.id }));
        if (todo.id === editTodo?.id) {
            setEditTodo({ id: '', task: '', completed: false });
        }
    };

    const onGetEditTodoClick = () => {
        getEditTodo(todo);
    }

    return (
        <li className={ styles.todoListItem }>
            <label
                htmlFor={todo.id}
                style={
                    todo.completed
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                }
                className={ styles.todoListLabel }
            >
                <input
                    onChange={onToggleTodoChange}
                    checked={todo.completed}
                    type="checkbox"
                    id={todo.id}
                    className={ styles.todoListCheckbox }
                />
                {todo.task}
            </label>
            <div className="todo-list__btns-box">
                <button
                    onClick={onGetEditTodoClick}
                    className={ styles.todoListEditBtn }
                >
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    onClick={handleDeleteTodoClick}
                    className={ styles.todoListDeleteBtn }
                >
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoItem;