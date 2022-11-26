
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';

import { useState } from 'react';

function App() {//text utils app
  const [mode, setMode] = useState('light');
const[alert,setAlert]=useState(null);
const showAlert=()=>{
setAlert({
  // msg:message,
  // type:type
})
}
  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled");
    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText="about TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert="this is alert" /> */}
      {/* <Alert alert="this is alert"/> */}
      <div className="container">

        <Textform heading="enter your text here" mode={mode} />
      </div>

    </>
  );
}





export default App;
