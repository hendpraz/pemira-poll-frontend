import React, { useState, useEffect } from 'react'

// Libs
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { AppContext } from "./libs/contextLib"
import { onError } from "./libs/errorLib"
import { getAuthCheck } from "resources/auth"
import config from "config"

// Pages
import Home from './pages/Home'
import LoginSelect from './pages/Login/LoginSelect'
import NonINA from './pages/Login/NonINA'
import Lembaga from './pages/Login/Lembaga'
import AmbilBerkas from './pages/Berkas/AmbilBerkas'
import Pendaftaran from './pages/Berkas/Pendaftaran'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

function App() {
  const history = useHistory()
  const [isAuthenticated, userHasAuthenticated] = useState(localStorage.getItem('token') ? true : false)
  const [user, setUser] = useState(null)
  const { defaultAPIURL } = config

  useEffect(() => {
    async function onLoad() {
      try {
        if (isAuthenticated) {
          console.log("Fetching profile...")
          const response = await getAuthCheck(localStorage.getItem('token'));
          console.log(response);
          if (response.detail) { // Permission error detail
            history.push("/login");
          } else {
            const { data } = response;
            setUser(data)
          }
        }
      }
      catch(e) {
        onError(e);
      }
    }
    
    onLoad();
  }, []);

  async function handleLogout() {
    // sign out
    localStorage.removeItem('token');
  
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    <AppContext.Provider
      value={{ isAuthenticated, userHasAuthenticated, user, setUser }}
    >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home handleLogout={handleLogout} />} />
        <Route exact path="/login" render={() => <LoginSelect />} />
        <Route exact path="/login/lembaga" render={() => <Lembaga />} />
        <Route exact path="/login/nonina" render={() => <NonINA />} />
        <Route exact path="/ambil-berkas" render={() => <AmbilBerkas />} />
        <Route exact path="/about-us" render={() => <AboutUs />} />
        <Route exact path="/daftar" render={() => <Pendaftaran />} />
        
        <Route path="" render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  </AppContext.Provider>

  );
}

export default App;
