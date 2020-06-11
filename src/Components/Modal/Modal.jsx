import React, { useState } from 'react';
import ModalStyle from './Modal.module.css';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(

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
