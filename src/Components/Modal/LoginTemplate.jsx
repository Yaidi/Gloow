import React from 'react';
import ModalStyle from './Modal.module.css';

const AdminLoginTemplate = ({closeModal}) => {
        return(
            <div className={ModalStyle.Overlay}>
            <div className={ModalStyle.Dialog}>
                <div className="modal-header">
                    <div className="title">
                        LOGIN INTO YOUR ACCOUNT.
                    </div>
                    <div className="close-button">
                            <span
                                className={ModalStyle.CrossIcon}
                                onClick={closeModal}>
                                    &times;
                            </span>
                    </div>
                </div>
                <div className="modal-body" >
                    <input
                        type="email"
                        className={ModalStyle.Inputs}
                        placeholder="Email Adress:"
                        required
                    />
                    <input
                        type="password"
                        className={ModalStyle.Inputs}
                        placeholder="Password:"
                        required
                    />
                    <div className={ModalStyle.Login}>
                        <button
                            type="submit"
                            onClick={() => {console.log(alert(`admin must login.`))}}
                            className={ModalStyle.LoginButton}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
            </div>
        );
}

export default AdminLoginTemplate;