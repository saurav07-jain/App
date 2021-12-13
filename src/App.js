import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(0 32 52) ';
      showAlert("DarkMode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} />
        {/* <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} />}>
            </Route>
            <Route exact path="About" element={<About />}>
            </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
      {/* <About /> */}


    </>
  );

}

export default App;


