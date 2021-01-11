import React, { useState, useEffect } from 'react'

// Libs
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContext } from "./libs/contextLib"
import { onError } from "./libs/errorLib"
import { getMyProfile } from "resources/auth"

// Pages
import Home from './pages/Home'
import LoginSelect from './pages/Login/LoginSelect'
import NonINA from './pages/Login/NonINA'
import Lembaga from './pages/Login/Lembaga'
import AmbilBerkas from './pages/Berkas/AmbilBerkas'
import Pendaftaran from './pages/Berkas/Pendaftaran'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import Profile from 'pages/Profile'

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(localStorage.getItem('token') ? true : false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function onLoad() {
      try {
        if (isAuthenticated) {
          console.log("Fetching profile...")
          const response = await getMyProfile()

          if (response.detail) {
            alert("Sesi login Anda telah berakhir, silakan login kembali.")
            handleLogout()
          } else {
            const { data } = response;
            setUser(data)

            console.log(data)
          }
        }
      }
      catch(e) {
        onError(e);
      }
    }
    
    onLoad();
  }, [isAuthenticated]);

  async function handleLogout() {
    // sign out
    localStorage.removeItem('token');
  
    userHasAuthenticated(false);
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
          <Route exact path="/profile" render={() => <Profile />} />
          <Route path="" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
