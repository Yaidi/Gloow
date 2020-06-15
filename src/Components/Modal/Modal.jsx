import React, { useContext } from 'react';
import { UserContext } from '../../Routes/UserContext'
import LoginTemplate from './Templates/Login/LoginTemplate';
import ShoppingTemplate from './Templates/Shopping/ShoppingTemplate';

const Modal = () => {
    const { isModalOpen, setIsModalOpen, loginAdmin } = useContext(UserContext);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <section>
            {isModalOpen && (
                loginAdmin ?
                    <LoginTemplate closeModal={closeModal} />
                    :
                    <ShoppingTemplate closeModal={closeModal} />
            )}
        </section>

    );
}

export default Modal;
