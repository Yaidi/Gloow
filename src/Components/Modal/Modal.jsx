import React, { useContext } from "react";
import ModalStyle from './Modal.module.css';
import { UserContext } from '../../Routes/UserContext'

const Modal = () => {
    const { isModalOpen, setIsModalOpen } = useContext(UserContext);


    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <section>
            {isModalOpen && (

                <div className={ModalStyle.Overlay}>
                    <div className={ModalStyle.Dialog}>
                        <button onClick={closeModal}>
                            <span
                                className={ModalStyle.CrossIcon}>
                                &times;
                            </span>
                        </button>

                        <input
                            type="email"
                        />
                        <input
                            type="password"
                        />
                        <button>
                            LOGIN
                        </button>
                    </div>
                </div>
            )}
        </section>

    );
}

export default Modal;
