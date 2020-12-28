import React from 'react'
import Button from 'components/Button'
import 'styles/LoginForm.scss'

const LoginForm = () => {
    return (
        <div className="login-container">
            <input type="text" name="username" id="username" placeholder="Username" /> <br />
            <input type="password" name="password" id="password"  placeholder="Password" /> <br />
            <div className="btn-container">
                <Button name="Login" file="Tombol 3"></Button>
            </div>
           
        </div>
    )
}

export default LoginForm
