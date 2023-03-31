import {FilterTodoProps} from "../../../../types/types";
import React, {useState} from "react";
import {IBtnItem} from "../../../../interfaces/interfaces";
// @ts-ignore
import styles from './TodoFilters.module.css';

const TodoFilters = ({ getTodoFilterValue }: FilterTodoProps) => {
    const [filterTodoVal, setFilterTodoVal] = useState('active');

    const onFilterTodoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterTodoVal(event.currentTarget.name);
        getTodoFilterValue(event.currentTarget.name);
    };

    const buttonsData: IBtnItem[] = [
        { name: 'active', label: 'Active tasks' },
        { name: 'completed', label: 'Completed tasks' },
    ]
    const buttons = buttonsData.map(({name, label}) => {
        const activeBtn = filterTodoVal === name;
        const clazz = activeBtn ? 'btnActive' : 'btn'
        return (
            <button
                className={ styles[clazz] }
                type='button'
                key={ name }
                name={ name }
                onClick={ onFilterTodoClick }>
                { label }
            </button>
        )
    })

    return (
        <div className={ styles.btnFilterGroup }>
            { buttons }
        </div>
    )
}

export default TodoFilters;