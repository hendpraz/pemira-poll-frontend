import React from 'react'
import LoginForm from '../../../components/LoginForm'
import'../../../styles/pages/Login.scss'
import Footer from '../../../components/Footer'

const NonINA = () => {
    return (
        <div className="loginContentContainer">
            <div className="LoginContent">
                <div className="header">
                    <h2>Login</h2>
                </div>
                <hr />
                <p>Mahasiswa Non-INA</p>
                <div className="formContainer">
                    <LoginForm />
                </div>
            </div>
            <Footer hashtag="false"/>
        </div>
    )
}

export default NonINA
