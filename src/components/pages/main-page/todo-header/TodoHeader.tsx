import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
// @ts-ignore
import styles from './TodoHeader.module.css';

const TodoHeader = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const usernames = useSelector((state: RootState) => state.users.names);
    let activeTasksCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className={ styles.appHeader }>
            <h1 className={ styles.appTitle }>Another TO DO app</h1>
            Welcome, { usernames[0]?.name }. You have { activeTasksCount } task(s) to do.
        </div>
        )
}

export default TodoHeader;