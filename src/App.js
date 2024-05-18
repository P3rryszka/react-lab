import './App.css';
import {useState} from "react";

function App() {
    const[email, setEmail] = useState('yeahYeah');

    let message = <div>Too short</div>;
    if(email.length < 5) {
        message = <div>Is too short</div>;
    } else if ( email.length < 15) {
        message =<div>Is ok</div>;
    } else {
        message = <div>Too long</div>
    }

    function  handleChange(event) {
        setEmail(event.target.value)
    }

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
          <h2>Your email {email}</h2>
          {message}
          <input type="text" value={email} onChange={handleChange}/>
      </div>
  );
}

export default App;
