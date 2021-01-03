import React from 'react'
import config from 'config'
import 'styles/pages/Login.scss'
import Button from 'components/Button'
import DarkBlue from 'layouts/DarkBlue'
import Footer from 'components/Footer'
import { useHistory } from 'react-router-dom'

const LoginSelect = () => {
    const history = useHistory()
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div className="mainContainer">
            <div className="myContent">
                <DarkBlue hashtag="false" />
                <div className="Content-login">
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt1.png`} alt="tirai" />
                        </div>
                        <Button file="login-button" onClick={e => history.push('/login/lembaga')}/>
                    </div>
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt2.png`} alt="tirai" />
                        </div>
                        <Button file="login-button" />
                    </div>
                    <div className="login-role">
                        <div className="img-container">
                            <img src={`${image}/login-curt3.png`} alt="tirai"/>
                        </div>
                        <Button file="login-button" onClick={e => history.push('/login/nonina')}/>
                    </div>
                </div>

                <h1 className="way">Who Are You ?</h1>
                <Footer hash='false'/>
            </div>
        </div>
    )
}

export default LoginSelect
