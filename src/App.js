import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/login'
import CheckIn from './Components/CheckIn/CheckIn'
import { Route,Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registrarse" element={<CheckIn />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
