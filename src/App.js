import './App.css';
import Cloudy from "./layouts/DarkBlue/Cloudy"
import LoginSelect from "./pages/Login/LoginSelect"

function App() {
  return (
    <Cloudy variant="2" children={LoginSelect()}/>
  );
}

export default App;
