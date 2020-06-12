import React from 'react';
// Components
import Routes from './Routes/Routes';
import Footer from './Components/Footer/Footer';
import { UserContextProvider } from "./Routes/UserContext";
import Modal from './Components/Modal/Modal'
// Css
import './App.css';



function App() {
    return (
        <>
            <UserContextProvider>
                <div className="container-fluid body-content back py-5">
                    <div className="container back">
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
