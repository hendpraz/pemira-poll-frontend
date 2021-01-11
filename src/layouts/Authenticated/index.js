import React from "react"
import { useEffect } from "react"
import { useAppContext } from "libs/contextLib"
import { useHistory } from 'react-router-dom'

const Authenticated = (props) => {
  const history = useHistory()
  const { children } = props
  const { isAuthenticated } = useAppContext();

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
