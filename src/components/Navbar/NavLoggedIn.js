import React from 'react';
import {Link} from 'react-router-dom'
import 'styles/Nav.scss'

function NavLoggedIn() {
    return (
        <div className="navMainContainer">
            <nav className="navMain" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="#">
                        <h1 className="web-title">Pemira KM</h1>
                    </Link>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item">
                            FAQ
                        </Link>

                        <Link className="navbar-item">
                            Tutorial
                        </Link>

                        <Link className="navbar-item" to="/about-us">
                            About Us
                        </Link>

                    </div>

                    <div className="navbar-end">
                        <Link className="navbar-item">
                            Gift Shop
                        </Link>

                        <Link className="navbar-item">
                            Kandidat
                        </Link>

                        <Link className="navbar-item" to="/profile">
                            Profile
                        </Link>
                    </div>
                </div>
                <Link
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </nav>

            <hr/>
        </div>

    )
}

export default NavLoggedIn