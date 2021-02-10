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
import PengembalianBerkas from './pages/Berkas/PengembalianBerkas'
import LembarDukungan from './pages/Dukungan'
import INA from './pages/INA'

import Pendaftaran from './pages/Berkas/Pendaftaran'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import Profile from 'pages/Profile'
import VoteAfter from 'pages/Vote/After'
// import VoteBefore from 'pages/Vote/Before'
import VoteSuccess from 'pages/Vote/VoteSuccess'
import Question from 'pages/Question'

// Admin pages
import AdminMenu from 'pages/AdminPage/Menu'

import AdminBakalCalon from 'pages/AdminPage/BakalCalon'
import AdminMassaLembaga from 'pages/AdminPage/MassaLembaga'
import AdminQuest from 'pages/AdminPage/Quest'
import AdminQuestion from 'pages/AdminPage/Question'
import AdminUsers from 'pages/AdminPage/User'

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
            
            // sign out
            localStorage.removeItem('token');
          
            userHasAuthenticated(false);
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

  return (
    <AppContext.Provider
      value={{ isAuthenticated, userHasAuthenticated, user, setUser }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <LoginSelect />} />
          <Route exact path="/login/lembaga" render={() => <Lembaga />} />
          <Route exact path="/login/nonina" render={() => <NonINA />} />
          <Route exact path="/ambil-berkas" render={() => <AmbilBerkas />} />
          <Route exact path="/pengembalian-berkas" render={() => <PengembalianBerkas />} />
	        <Route exact path="/lembar-dukungan" render={() => <LembarDukungan />} />
          <Route exact path="/about-us" render={() => <AboutUs />} />
          <Route exact path="/INA" render={() => <INA />} />
          <Route exact path="/daftar" render={() => <Pendaftaran />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/vote-k3m" render={() => <VoteAfter tipe="k3m"/>} />
          <Route exact path="/vote-mwawm" render={() => <VoteAfter tipe="mwa"/>} />
          <Route path="/pertanyaan/:id" render={() => <Question tipe="mwa"/>} />
          {/* <Route exact path="/votebefore" render={() => <VoteBefore />} /> */}
          <Route exact path="/votesuccess" render={() => <VoteSuccess />} />

          {/* <Route exact path="/admin" render={() => <Admin />} /> */}
          <Route exact path="/admin" render={() => <AdminMenu />} />
          <Route exact path="/admin/users" render={() => <AdminUsers />} />
          <Route exact path="/admin/massa-lembaga" render={() => <AdminMassaLembaga />} />

          <Route exact path="/admin/bakal-calon" render={() => <AdminBakalCalon />} />
          <Route exact path="/admin/questions" render={() => <AdminQuestion />} />
          
          <Route exact path="/admin/quests" render={() => <AdminQuest />} />

          <Route path="" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
