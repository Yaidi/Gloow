import React, { useContext, useState } from 'react';
import { UserContext } from '../../Routes/UserContext'
import LoginTemplate from './LoginTemplate';
import ShoppingTemplate from './ShoppingTemplate';

const Modal = () => {
    const { isModalOpen, setIsModalOpen } = useContext(UserContext);

    const [loginAdmin, setLoginAdmin] = useState(false);

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
