import React from 'react';
import LoginStyle from './LoginTemplate.module.css';

const AdminLoginTemplate = ({closeModal}) => {
        return(
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
                <div className="modal-body" >
                    <input
                        type="email"
                        className={LoginStyle.Inputs}
                        placeholder="Email Adress:"
                        required
                    />
                    <input
                        type="password"
                        className={LoginStyle.Inputs}
                        placeholder="Password:"
                        required
                    />
                    <div className={LoginStyle.Login}>
                        <button
                            type="submit"
                            onClick={() => {console.log(alert(`admin must login.`))}}
                            className={LoginStyle.LoginButton}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
            </div>
        );
}

export default AdminLoginTemplate;