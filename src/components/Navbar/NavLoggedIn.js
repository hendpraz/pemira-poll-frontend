import config from 'config';
import React from 'react';
import {Link} from 'react-router-dom'
import 'styles/Nav.scss'

function NavLoggedIn({ logo }) {
    const { assetsURL: {image}} = config

    return (
        <div className="navMainContainer">
            <nav className="navMain" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {logo && <div className="home-logo">
                        <img src={`${image}/home-logo.png`} alt=""/>
                    </div>}
                    <Link className="navbar-item" to="#">
                        <h1 className="web-title">Pemira KM</h1>
                    </Link>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="#FAQ">
                            FAQ
                        </a>

                        <a className="navbar-item" href="#Tutorial">
                            Tutorial
                        </a>

                        <Link className="navbar-item" to="/about-us">
                            About Us
                        </Link>

                    </div>

                    <div className="navbar-end">
                        <Link className="navbar-item">
                            Gift Shop
                        </Link>

                        <a className="navbar-item" href="#Kandidat">
                            Kandidat
                        </a>

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