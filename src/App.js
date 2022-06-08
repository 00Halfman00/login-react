import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';

function App() {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState();

  function logHandler(email, password) {
    console.log(user);
    setLog(!log);
  }

  return (
    <React.Fragment>
      <NavBar logged={log} changeLog={logHandler} user={user}/>
      <main>
        {!log && <Login log={log} changeLog={logHandler} setUser={setUser} />}
        {log && <Home user={user} />}
        </main>
    </React.Fragment>
  );
}

export default App;
