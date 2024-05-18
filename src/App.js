import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('yeahYeah');
    const [isAuthenticated, setAuthenticated] = useState(false);


    function  handleChange(event) {
        setEmail(event.target.value)
    }

    let content;
    if(isAuthenticated) {
        content = <div>
            <h2>Hello {email}</h2>
            <button onClick={() => {setAuthenticated(false)
                                            setEmail('')}
            }>
                Log out
            </button>
        </div>
    } else {
        content = <div>
            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={
                () => setAuthenticated(true)
            }>
                Log in
            </button>
        </div>
    }

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
          {content}
      </div>
  );
}

export default App;
