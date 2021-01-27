import React from 'react'

const NavAdmin = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navidgation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <div className="navbar-brand-content">
                            <h3 className="has-text-primary">PEMIRA</h3>

                            <h5 className="has-text-danger">Admin Page</h5>
                        </div>
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#User">
                                User
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="#userList">
                                    User List
                                </a>
                                <a className="navbar-item" href="#createUser">
                                    Create User
                                </a>
                            </div>

                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#Quest">
                                Quest
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="#questList">
                                    Quest List
                                </a>
                                <a className="navbar-item" href="#createQuest">
                                    Create Quest
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavAdmin
