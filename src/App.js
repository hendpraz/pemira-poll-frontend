import Home from './pages/Home'
import LoginSelect from './pages/Login/LoginSelect'
import NonINA from './pages/Login/NonINA'
import Lembaga from './pages/Login/Lembaga'
import AmbilBerkas from './pages/Berkas/AmbilBerkas'
import Pendaftaran from './pages/Berkas/Pendaftaran'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <LoginSelect />} />
        <Route exact path="/login/lembaga" render={() => <Lembaga />} />
        <Route exact path="/login/nonina" render={() => <NonINA />} />
        <Route exact path="/ambil-berkas" render={() => <AmbilBerkas />} />
        <Route exact path="/daftar" render={() => <Pendaftaran />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
