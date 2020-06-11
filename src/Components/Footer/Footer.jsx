import React from 'react'
import Style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid" id={Style.backcolor}>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav d-flex justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link text-secondary mb-4" href="#">Copyright © 2020 Gloow. All Rights Reserved</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;