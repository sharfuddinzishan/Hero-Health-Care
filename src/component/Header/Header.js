import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid h-25 w-25" src="https://i.ibb.co/HnBMB8F/hhc-logo.png" alt="Hero Health Care" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Who We Are
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="about">About Us</Link></li>
                                        <li><Link className="dropdown-item" to="contact">Contact Us</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link className="dropdown-item" to="faq">FAQ</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/doctors">Doctors</Link>
                                </li>
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
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">
                                                    {user?.displayName ? user.displayName : 'AnonymousUser'}
                                                </Link>
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