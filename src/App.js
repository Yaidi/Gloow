import React from 'react';
// Components
import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import { UserContextProvider } from "./Routes/UserContext";
import Modal from './Components/Modal/Modal'
// Css
import './App.css';



function App() {
    return (
        <>
            <UserContextProvider>
                <Header />
                <div className="container back">
                    <div className="container-fluid back py-5">
                        <Routes />
                    </div>
                </div>
                <Modal />
                <Footer />
            </UserContextProvider>

        </>
    );
}

export default App;
