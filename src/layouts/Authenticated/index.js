import React from "react"
import { useEffect, useContext } from "react"
import { getAuthCheck } from "resources/auth"
import { DispatchUserContext, StateUserContext } from "reducers/user"

const Authenticated = (props) => {
  const { children, ...rest } = props

  const userState = useContext(StateUserContext)
  const userDispatch = useContext(DispatchUserContext)

  const token = localStorage.getItem('token')

  const doAuth = async () => {
    try {
      const response = await getAuthCheck(token);
      console.log(response);
      if (response.detail) { // Permission error detail
        history.push("/login");
      } else {
        const { data } = response;
        userDispatch({
          type: "set_user",
          payload: data,
        });
      }
    } catch (e) {
      // setError('Error during contacting the server, please restart your page');
    }
  };

  useEffect(() => {
    doAuth();
  }, []);

  if (!userState.user) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};

export default Authenticated;
