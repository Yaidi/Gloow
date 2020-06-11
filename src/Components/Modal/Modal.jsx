import React, { useContext, useState } from 'react';
import { UserContext } from '../../Routes/UserContext'
import LoginTemplate from './Templates/Login/LoginTemplate';
import ShoppingTemplate from './Templates/Shopping/ShoppingTemplate';

const Modal = () => {
    const { isModalOpen, setIsModalOpen } = useContext(UserContext);

    const [loginAdmin, setLoginAdmin] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <section>
            {isModalOpen && (
                loginAdmin ?
                    <LoginTemplate closeModal={closeModal}/>
                    :
                    <ShoppingTemplate closeModal={closeModal}/>
            )}
        </section>

    );
}

export default Modal;
