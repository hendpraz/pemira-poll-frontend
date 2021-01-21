import React, { useState } from "react"
import { useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { useAppContext } from "libs/contextLib"

const AdminAuth = (props) => {
  const history = useHistory()
  const { children } = props
  const isAuthenticated = localStorage.getItem('token') ? true : false
  const { user } = useAppContext()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        alert("Silakan login terlebih dahulu!")
        history.push("/login")
      }
    };

    checkAuth();
  }, [history, isAuthenticated]);

  useEffect(() => {
    if (user) {
      const userId = user.groups_id

      // check if current user is not an admin
      if (userId !== 1 && userId !== 2) {
        console.log("Unauthorized access!")
        history.push("/")
      } else {
        setIsAdmin(true)
      }
    }
}, [user, history])

  return (
    <>
      {isAdmin && children}
    </>
  );
};

export default AdminAuth;
