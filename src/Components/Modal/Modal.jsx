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

                        <h1>
                            <span role="img" aria-label="tada">🎉</span>
                                This is a modal!                            
                            <span role="img" aria-label="tada">🎉</span>>
                        </h1>
                        <button onClick={closeModal}>
                            <span className={ModalStyle.CrossIcon}>
                                &times;
                            </span>
                        </button>
                        
                    </div>
                </div>
            )}
        </section>

    );
}

export default Modal;
