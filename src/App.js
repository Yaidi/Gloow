import React from 'react';
// Components
import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
// Css
import './App.css';

function App() {
    return (
        <>
            <Header />
            <div class="container bg-light mt-about py-5">
                <div class="row">
                    <div class="col-lg-6">
                        <Routes />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
