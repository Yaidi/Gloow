import React, { useContext } from "react";
import AdminIcon from '../../Assets/icons/admin-icon.png';
import ShoppingIcon from '../../Assets/icons/shopping-icon.png';
import Gloowheader from '../../Assets/icons/gloowheader.png';
import HeaderStyle from './Header.module.css'
import ButtonShopping from "../CarshoppingButton/CarshoppingButton";
import { UserContext } from '../../Routes/UserContext'

const Header = () => {

    const { setIsModalOpen } = useContext(UserContext);


    const openModalLogin = () => {
        setIsModalOpen(true)
    };
    const openModalCart = () => {
        setIsModalOpen(true)
    };



    return (
        <header>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img
                        alt="Gloowheader"
                        src={Gloowheader}
                        className={HeaderStyle.Logo}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <span className="navbar-text">
                            Welcome Admin Shopper
                    </span>
                        <li className="nav-item active">
                            <div className="nav-link">
                                <img
                                    alt="AdminIcon"
                                    onClick={openModalLogin}
                                    src={AdminIcon}
                                    className={HeaderStyle.Icons}
                                />
                                <span className="sr-only">(current)</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <img
                                    alt="ShoppingIcon"
                                    onClick={openModalCart}
                                    src={ShoppingIcon}
                                    className={HeaderStyle.Icons}
                                />
                                <ButtonShopping />
                            </div>
                        </li>
                    </ul>


                </div>
            </nav>



        </header>
    );
}

export default Header;
