import React from 'react';
// Components
import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Css
import './App.css';



function App() {
    return (
        <>
            <Header />
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <Routes />
                </div>
            </div>
            <Footer />

        </>
    );
}

export default App;
