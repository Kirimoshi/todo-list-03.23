import TodoHeader from "./todo-header/TodoHeader";
import TodoList from "./todo-list/TodoList";
import TodoAddForm from "./todo-add-form/TodoAddForm";
import {useState} from "react";
import {ITodoItem} from "../../../interfaces/interfaces";
import TodoEdit from "./todo-edit/TodoEdit";
import TodoFilters from "./todo-filters/TodoFilters";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
// @ts-ignore
import styles from './MainPage.module.css';

const MainPage = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const [editTodo, setEditTodo] = useState<ITodoItem | null>(null);
    const [todoFilterValue, setTodoFilterValue] = useState('active');
    const getTodoFilterValue = (filterValue: string) => {
        setTodoFilterValue(filterValue);
    }
    const getEditTodo = (editTodo: ITodoItem) => {
        setEditTodo(editTodo);
    }

    return (
        <>
            <main className={ styles.app }>
                <div className={ styles.appWrapper }>
                    <TodoHeader/>
                    <TodoFilters getTodoFilterValue={getTodoFilterValue} />
                    <TodoList
                        todos={todos}
                        todoFilterValue={todoFilterValue}
                        getEditTodo={getEditTodo}
                        setEditTodo={setEditTodo}
                        editTodo={editTodo}/>
                    <div className={ styles.appInputsBox }>
                        { editTodo?.id ?
                            (<TodoEdit editTodo={editTodo} setEditTodo={setEditTodo} />) :
                            <TodoAddForm/> }
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage;