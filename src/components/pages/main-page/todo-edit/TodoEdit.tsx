import {EditTodoProps} from "../../../../types/types";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import { EDIT_TODO as UPDATE_TODO } from "../../../../redux/reducers/todoReducer";
// @ts-ignore
import styles from './TodoEdit.module.css';

const TodoEdit = ({ editTodo, setEditTodo }: EditTodoProps) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setTask(editTodo.task);
    }, [editTodo]);

    const onEditTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (task.trim().length < 5) {
            setError('Minimum allowed task length is 5');
        } else if (task.trim().length > 50) {
            setError('Maximum allowed task length is 50');
        } else {
            dispatch(UPDATE_TODO({ editedTodo: { ...editTodo, task } }));
            setEditTodo({ id: '', task: '', completed: false });
            setTask('');
        }
    };

    const onUpdateTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
        if (task.trim().length > 5 && task.trim().length < 50) {
            setError('');
        }
    };

    return (
        <form onSubmit={onEditTaskSubmit} className={ styles.form }>
            <div className={ styles.formControl }>
                <input
                    type="text"
                    className={ styles.formInput }
                    placeholder="Edit task..."
                    onChange={onUpdateTodoChange}
                    value={task}
                />
                {error && <p className={ styles.formErrorText }>{error}</p>}
            </div>
            <button className={ styles.formBtn }>Edit task</button>
        </form>
    )
}

export default TodoEdit;