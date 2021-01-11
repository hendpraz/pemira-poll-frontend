import React from 'react'
import { Link } from 'react-router-dom'

const NavNoBrands = () => {
    return (
        <div>
            <div className="navMainContainer nobrands">
                <nav className="navMain" role="navigation" aria-label="main navigation">
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
                                Kandidat
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

             
            </div>
        </div>
    )
}

export default NavNoBrands
