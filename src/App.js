import React, { useState, useEffect } from 'react'

// Libs
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { AppContext } from "./libs/contextLib"
import { onError } from "./libs/errorLib"
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
  const token = localStorage.getItem('token')
  const [isAuthenticated, userHasAuthenticated] = useState(token ? true : false)
  const [user, setUser] = useState(null)
  const { defaultAPIURL } = config

  useEffect(() => {
    async function onLoad() {
      try {
        if (isAuthenticated) {
          fetch(`${defaultAPIURL}/my-profile/`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(res => res.json())
            .then(json => {
              setUser(json.data)
            });
        }
        userHasAuthenticated(true);
      }
      catch(e) {
        if (e !== 'No current user') {
          onError(e);
        }
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
      value={{ isAuthenticated, user }}
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
