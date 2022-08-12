import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type1) =>{
    setAlert({
      msg: message,
      type: type1
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is applied successfully", "success")
      document.title = "TextUtils - Light Mode"
      // setInterval(() => {
        
      //   document.title = "TextUtils is best"
      // },2000);
      // setInterval(() => {
        
      //   document.title = "Install textUtils"
      // },1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark mode is applied successfully", "success")
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        
        <div className="container">
          {/* <Routes>
            <Route path="/" element={}> */}
            <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
            {/* </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes> */}
        </div>

    {/* </Router> */}
    </>
  );
}

export default App;
