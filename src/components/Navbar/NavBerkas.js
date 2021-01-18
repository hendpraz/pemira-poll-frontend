import React from 'react'
import config from 'config'
import { Link, useHistory } from 'react-router-dom'

const NavBerkas = () => {

    const history = useHistory()

    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div>
            <div className="navMainContainer">
                <nav className="navMain" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <img src={`${image}/ambil-berkas.png`} alt="ambil-berkas"/>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start" style={{paddingLeft: "2.5vw"}}>
                            <Link className="navbar-item" onClick={history.goBack}>
                                &#60; Kembali
                            </Link>
                        </div>

                        <div className="navbar-end" style={{paddingRight: "3.5vw"}}>
                            <Link className="navbar-item" to="/ambil-berkas">
                                Ambil Berkas
                            </Link>

                            <Link className="navbar-item" to="/pengembalian-berkas">
                                Kembalikan Berkas
                            </Link>
                        </div>
                    </div>
                    <Link
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </nav>

                <hr/>
            </div>
        </div>
    )
}

export default NavBerkas
