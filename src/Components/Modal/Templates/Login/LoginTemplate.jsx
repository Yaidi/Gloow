import React, { useState, useContext } from 'react';
import LoginStyle from './LoginTemplate.module.css';
import { UserContext } from '../../../../Routes/UserContext'

const AdminLoginTemplate = ({ closeModal }) => {


    // State from value email and password
    const { user, setSaveUser } = useContext(UserContext);
    console.log(user, setSaveUser)

    // State from not empty inputs
    const [error, setError] = useState({
        errorFields: false,
        errorUs: false
    });

    // Take values email and password of input
    const onChangeInput = (e) => {
        setSaveUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const { email, password } = user;

    // Click user
    const onSubmit = (e) => {
        e.preventDefault();

        // Validate not empty inputs
        if (email.trim() === "" || password.trim() === "") {
            setError({
                ...error,
                errorFields: true
            });
            return;
        }
        // Delete mesage error
        setError({
            ...error,
            errorFields: false
        });
    };
    return (
        <div className={LoginStyle.Overlay}>
            <div className={LoginStyle.lgDialog}>
                <div className="modal-header">
                    <div className="title">
                        LOGIN INTO YOUR ACCOUNT.
                    </div>
                    <div className="close-button">
                        <span
                            className={LoginStyle.CrossIcon}
                            onClick={closeModal}>
                            &times;
                            </span>
                    </div>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="modal-body" >
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={email}
                            className={LoginStyle.Inputs}
                            placeholder="Email Adress:"
                            onChange={onChangeInput}
                        />
                        <input
                            name="password"
                            type="password"
                            id="password"
                            value={password}
                            className={LoginStyle.Inputs}
                            placeholder="Password:"
                            onChange={onChangeInput}
                        />
                        <div className={LoginStyle.Login}>
                            <button
                                type="submit"
                                name="action"
                                /*  onClick={() => { console.log(alert(`admin must login.`)) }} */
                                className={LoginStyle.LoginButton}>
                                LOGIN
                        </button>

                        </div>
                        {error.errorFields ? (
                            <p className="card-panel lighten-5 z-depth-1 text-danger pt-4">
                                ALL FIELDS ARE REQUIRED
                            </p>
                        ) : null}
                    </div>
                </form>
            </div>
        </div>

    );
}

export default AdminLoginTemplate;