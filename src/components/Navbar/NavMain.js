import React from 'react';
import 'styles/Nav.scss'

function NavMain() {
    return (
        <div className="navMainContainer">
            <nav className="navMain" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <h1 className="web-title">Pemira KM</h1>
                    </a>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            FAQ
                        </a>

                        <a className="navbar-item" href="/">
                            Tutorial
                        </a>

                        <a className="navbar-item" href="/">
                            About Us
                        </a>

                    </div>

                    <div className="navbar-end">
                        <a className="navbar-item" href="/">
                            Kandidat
                        </a>

                        <a className="navbar-item" href="/">
                            Login
                        </a>
                    </div>
                </div>
                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    href="/"
                    >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </nav>

            <hr />
        </div>

    )
}

export default NavMain