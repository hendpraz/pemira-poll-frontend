import React from 'react'
import config from 'config'
import 'styles/pages/Login.scss'
import Button from 'components/Button'
import DarkBlue from 'layouts/DarkBlue'
import Footer from 'components/Footer'

const LoginSelect = () => {
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div>
            <div className="myContent">
                <DarkBlue hashtag="false" />
                <div className="Content-login">
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt1.png`} alt="tirai" />
                        </div>
                        <Button file="Tombol 5" name="Login" />
                    </div>
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt2.png`} alt="tirai" />
                        </div>
                        <Button file="Tombol 5" name="Login" />
                    </div>
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt3.png`} alt="tirai"/>
                        </div>
                        <Button file="Tombol 5" name="Login" />
                    </div>
                </div>

                <h1 className="way">Who Are You ?</h1>
                <Footer hash='false'/>
            </div>
        </div>
    )
}

export default LoginSelect
