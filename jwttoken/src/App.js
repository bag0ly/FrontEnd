import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jwt.sulla.hu/login', { username, password })
      .then((res) => {
        const newToken = res.data.token;

        if (newToken !== '') {
          axios.get('https://jwt.sulla.hu/termekek', {
            headers: { Authorization: 'Bearer ' + newToken },
          })
            .then(function (response) {
              console.log(response);
              setResult(response.data); 
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display the result */}
      {result && (
        <div>
          <h3>API Result:</h3>
          <p>{JSON.stringify(result)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
