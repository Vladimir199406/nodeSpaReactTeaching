import React from 'react';
import logo from "../EDV-logo.jpg";
import {NavLink} from "react-router-dom";

const MainPageFooter=()=>{
    return (
        <footer>
            <div className="my-4">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="#">
                            <i className="fas fa-home fa-2x"></i>
                            <i className="fas fa-hand-point-up"></i>
                            <span className="sr-only">(current)</span>
                        </a>
                    </span>
                    <span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="https://wa.me/79152431253">
                            <i className="fas fa-phone-volume"></i>: 8-915-243-12-53
                        </a>
                    </span>
                    <div><span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="https://vk.com/id325907685">
                            <i className="fab fa-twitter-square fa-lg" style={{color: "#007bff"}}></i>
                        </a>
                    </span>
                    <span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="https://vk.com/id325907685">
                            <i className="fab fa-facebook fa-lg" style={{color: "grey"}}></i>
                        </a>
                    </span>
                    <span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="https://vk.com/id325907685">
                            <i className="fab fa-instagram-square fa-lg" style={{color: "brown"}}></i>
                        </a>
                    </span>
                    <span className="navbar-brand mb-0 h1">
                        <a className="nav-link" href="https://vk.com/id325907685">
                            <i className="fab fa-vk fa-lg"></i>
                        </a>
                    </span>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
export default MainPageFooter;