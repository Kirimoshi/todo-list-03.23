import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {ADD_TODO} from "../../../../redux/reducers/todoReducer";
// @ts-ignore
import styles from './TodoAddForm.module.css';

const TodoAddForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const idGenerator = () => {
    return new Date().getTime().toString();
  }
  const onAddTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim().length < 5) {
      setError('Minimum allowed task length is 5');
    } else if (task.trim().length > 50) {
      setError('Maximum allowed task length is 50');
    } else {
      dispatch(ADD_TODO({ task, id: idGenerator(), completed: false }));
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
      <form onSubmit={onAddTaskSubmit} className={ styles.form }>
        <div className={ styles.formControl }>
          <input
              type="text"
              className={ styles.formInput }
              placeholder="Add task..."
              onChange={onUpdateTodoChange}
              value={task}
          />
          {error && <p className={ styles.formErrorText }>{error}</p>}
        </div>
        <button className={ styles.formBtn }>Add new task</button>
      </form>
  )
}

export default TodoAddForm;