import React from "react"
import { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Authenticated = (props) => {
  const history = useHistory()
  const { children } = props
  const isAuthenticated = localStorage.getItem('token') ? true : false

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        alert("Silakan login terlebih dahulu!")
        history.push("/login")
      }
    };

    checkAuth();
  }, [history, isAuthenticated]);

  return (
    <>
      {children}
    </>
  );
};

export default Authenticated;
