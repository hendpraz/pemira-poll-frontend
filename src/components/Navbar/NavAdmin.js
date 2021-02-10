import React from 'react'
import { Link } from 'react-router-dom'

const NavAdmin = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navidgation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/admin">
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
                                <Link className="navbar-item" to="/admin/users">
                                    User Accounts
                                </Link>
                                <Link className="navbar-item" to="/admin/massa-lembaga">
                                    Massa-Lembaga
                                </Link>
                                <Link className="navbar-item" to="/admin/bakal-calon">
                                    Bakal Calon
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#Quest">
                                Pertanyaan
                            </a>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/admin/questions">
                                    Manage Questions
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#Quest">
                                Quest
                            </a>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/admin/quests">
                                    Manage Quests
                                </Link>
                            </div>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/admin/quest-completion">
                                    Quest Completion
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#Quest">
                                Duel
                            </a>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/admin/duels">
                                    Manage Duels
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavAdmin
