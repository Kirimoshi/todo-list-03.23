import {Link, redirect} from "react-router-dom";
// @ts-ignore
import styles from './WelcomePage.module.css';
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {UPDATE_USER_NAME} from "../../redux/reducers/userReducer";

const WelcomePage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const onUpdateUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim().length > 1) {
            setName(event.target.value);
        }
    };

    const saveUserNameHandler = () => {
        dispatch(UPDATE_USER_NAME({ name }));
    }
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <>
            <main className={ styles.app }>
                <div className={ styles.appWrapper }>

                    <div className={ styles.appInputsBox }>
                        <form
                            action="#"
                            className={ styles.form }
                            onSubmit={ submitHandler }>
                            <div className={ styles.formControl }>
                                <label htmlFor='name'>
                                    <h2 className={ styles.appHeader }>Greetings, new user</h2>
                                </label>
                                <input
                                    type="text"
                                    className={ styles.formInput }
                                    name="name"
                                    id="name"
                                    placeholder="What's your name?"
                                    required={ true }
                                    aria-labelledby="name"
                                    aria-required={ true }
                                    onChange={ onUpdateUserNameChange }
                                />
                            </div>
                            <Link to='/todolist'
                                  className={ styles.formLink }
                                  onClick={ saveUserNameHandler }>Save</Link>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default WelcomePage;