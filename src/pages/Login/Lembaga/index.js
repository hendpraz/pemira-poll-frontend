import React from 'react'
import LoginForm from '../../../components/LoginForm'
import'../../../styles/pages/Login.scss'
import Footer from '../../../components/Footer'

const Lembaga = () => {
    return (
        <div className="loginContentContainer lembaga">
            <div className="LoginContent">
                <div className="header">
                    <h2>Login</h2>
                </div>
                <hr />
                <p>Himpunan, Fakultas, <br /> Sekolah, Unit, BSO</p>
                <div className="formContainer">
                    <LoginForm />
                </div>
            </div>
            <Footer hashtag="false"/>
        </div>
    )
}

export default Lembaga
