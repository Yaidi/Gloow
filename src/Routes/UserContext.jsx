import React, { createContext, useState } from 'react'
import Modal from '../Components/Modal/Modal'

//initializing create context Hook 
export const UserContext = createContext();


//box that save values to share width other components 

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState('Admin');
    const [shoppingCounter, setShoppingCounter] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginAdmin, setLoginAdmin] = useState(true);



    return (
        <UserContext.Provider value={{ user, setUser, shoppingCounter, setShoppingCounter, Modal, isModalOpen, setIsModalOpen, loginAdmin, setLoginAdmin }}>
            {children}
        </UserContext.Provider>
    );
}
