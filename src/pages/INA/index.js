import React from "react"
import { useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { loginINA } from "resources/auth"

const INA = () => {
  const history = useHistory()
  const isAuthenticated = localStorage.getItem('token') ? true : false

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        const search = window.location.search;
        const ticket = new URLSearchParams(search).get("ticket")
        if (ticket){
          const response = await loginINA(ticket)
          if (response.non_field_erros) {
            alert("Invalid INA login, please try again.")
          } else {
            localStorage.setItem('token', response.token);
            history.push('/profile')
          }
        }
      }
    };

    checkAuth();
  }, [history, isAuthenticated]);

  return (
    <>
      {!isAuthenticated && <p>Loading...</p>}
    </>
  );
};

export default INA;
