import React, { useState, useContext } from 'react';
import LoginStyle from './LoginTemplate.module.css';
import { UserContext } from '../../../../Routes/UserContext'
import { SerchUser } from '../../../../Library/UseFetch'

const AdminLoginTemplate = ({ closeModal }) => {


    // State from value userName and password
    const { user, setSaveUser, setdatauser, setIsModalOpen } = useContext(UserContext);


    // State from not empty inputs
    const [error, setError] = useState({ errorFields: false, errorUs: false });

    // Take values userName and password of input
    const onChangeInput = (e) => {
        setSaveUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const { userName, password } = user;

    // enter user
    const onSubmit = async (e) => {
        e.preventDefault();

        // // Validate not empty inputs
        // regex para userName.
        if (userName.trim() === "" || password.trim() === "") {
            setError({
                ...error,
                errorFields: true
            });
            return;
        }
        const response = await SerchUser(userName, password);
        const obj = {};
        obj.token = response.access_token;
        obj.userName = 'Admin';
        response.error == null ? UpdateData() : alert('chech your info')

        // Delete mesage error
        setError({
            ...error,
            errorFields: false
        });

        function UpdateData() {
            setdatauser(obj)
            setIsModalOpen(false)
            user.userName = ''
            user.password = ''
        }
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
                            name="userName"
                            type="userName"
                            id="userName"
                            value={userName}
                            className={LoginStyle.Inputs}
                            placeholder="User Name:"
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