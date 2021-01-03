import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import 'styles/LoginForm.scss'

import { useAppContext } from "libs/contextLib";
import { useFormFields } from "libs/hooksLib";
import { onError } from "libs/errorLib";

const LoginForm = () => {
    const history = useHistory();
    const { userHasAuthenticated, setUser } = useAppContext();
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });

    return (
        <div className="login-container">
            <input type="text" name="username" id="username" placeholder="Username" /> <br />
            <input type="password" name="password" id="password"  placeholder="Password" /> <br />
            <div className="btn-container">
                <Button name="Login" file="login-btn"></Button>
            </div>   
        </div>
    )
}

export default LoginForm
