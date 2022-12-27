import './App.css'
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';


function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user.id ? <Homepage/> : <Login  setLoginUser={setLoginUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
