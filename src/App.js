import React from 'react';
// Components
import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import { UserContextProvider } from "./Routes/UserContext";
import Modal from './Components/Modal/Modal'
// Css
import './App.css';

function App() {
    return (
        <>
            <UserContextProvider>
                <Header />
                <div className="container bg-light mt-about py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <Routes />
                        </div>
                    </div>
                </div>
                <Modal />
            </UserContextProvider>
        </>
    );
}

export default App;
