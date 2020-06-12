import React, { useContext } from "react";
import AdminIcon from '../../Assets/icons/admin-icon.png';
import ShoppingIcon from '../../Assets/icons/shopping-icon.png';
import Gloowheader from '../../Assets/icons/gloowheader.png';
import HeaderStyle from './Header.module.css'
import ButtonShopping from "../CarshoppingButton/CarshoppingButton";
import { UserContext } from '../../Routes/UserContext'
import { Link } from "react-router-dom";


const Header = () => {

    const { setIsModalOpen, setLoginAdmin, dataUser } = useContext(UserContext);



    const openModalLogin = () => {
        setIsModalOpen(true)
        setLoginAdmin(true)
    };
    const openModalCart = () => {
        setIsModalOpen(true)
        setLoginAdmin(false)
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id={HeaderStyle.backColor}>
                <Link to="/" className="navbar-brand"  >

                    <img
                        alt="Gloowheader"
                        src={Gloowheader}
                        className={HeaderStyle.Logo}
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <span className="navbar-text">
                            <p>
                                Welcome {dataUser.userName}
                            </p>
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
