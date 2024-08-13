import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#033E3E';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode enabled", "warning")
    }
  }
  return (
    <>
       <Router> 
        <Navbar title="GOATED" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="cont my-3">
           <Routes>
            <Route exact path="/AboutUs" element={<AboutUs mode={Mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text" mode={Mode} />} />
          </Routes> 
        </div>
      </Router>
    </>

  );
}

export default App;