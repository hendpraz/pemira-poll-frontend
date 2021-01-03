import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import 'styles/LoginForm.scss'

import { useAppContext } from "libs/contextLib";
import { useFormFields } from "libs/hooksLib";
import { onError } from "libs/errorLib";
import { loginNonINA } from "resources/auth"

const LoginForm = () => {
    const history = useHistory();
    const [fields, handleFieldChange] = useFormFields({
      username: "",
      password: ""
    });

    async function handleSubmit(event) {
        event.preventDefault();
    
        console.log("Logging in...")

        fetch('http://localhost:8000/api/login/non-INA/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: fields.username,
            password: fields.password
          })
        })
          .then(res => res.json())
          .then(json => {
            if (json.non_field_errors) {
              alert("Wrong username and password")
            } else {
              localStorage.setItem('token', json.token);
              console.log(json.token)
              history.push("/")
            }
          });
    }

    return (
        <div className="login-container">
          <input type="text" name="username" id="username" placeholder="Username" value={fields.username} onChange={handleFieldChange} /> <br />
          <input type="password" name="password" id="password" placeholder="Password" value={fields.password} onChange={handleFieldChange}/> <br />
          <div className="btn-container">
            <Button name="Login" file="login-btn" onClick={handleSubmit}></Button>
          </div>   
        </div>
    )
}

export default LoginForm
