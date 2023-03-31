import {TodoListProps} from "../../../../types/types";
import TodoItem from "./todo-item/TodoItem";
// @ts-ignore
import styles from './TodoList.module.css';

const TodoList = ({todos,
                  todoFilterValue,
                  getEditTodo,
                  setEditTodo,
                  editTodo}: TodoListProps) => {
    return (
        <ul className={ styles.todoList }>
            {todos
                .filter((todo) => (todoFilterValue === 'active' ? !todo.completed : todo.completed))
                .map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        editTodo={editTodo}
                        getEditTodo={getEditTodo}
                        setEditTodo={setEditTodo}
                    />
                ))}
        </ul>
    )
}

export default TodoList;