import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img className="img-fluid h-25 w-25" src="https://i.ibb.co/HnBMB8F/hhc-logo.png" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Who We Are
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">About Us</a></li>
                                        <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">FAQ</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">How It Works</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    !user?.email &&
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                to="/account"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                User Account
                                            </NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link"
                                                to="/login"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                to="/register"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                Register
                                            </NavLink>
                                        </li> */}
                                    </>
                                }
                                {
                                    user?.email ?
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    to="/appointment"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    Appointment
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink onClick={logOut} className="nav-link"
                                                    to="/home"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    LogOut
                                                </NavLink>
                                            </li>
                                        </> : ''
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;