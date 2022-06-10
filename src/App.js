import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar/NavBar';
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';

function App() {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const it = localStorage.getItem('oscar@yahoo.com');
    if ('password02' === it) {
      setLog(true)
    }
  }, []);

  function logHandler(myEmail, myPassword) {
    localStorage.setItem(myEmail, myPassword);
    //console.log('logged in')
    setLog(true);
  }

  function logOut() {
    setLog(false);
    //console.log('logged out')
    localStorage.removeItem('oscar@yahoo.com');
  }

  return (
    <React.Fragment>
      <NavBar logged={log} changeLog={logOut} user={user} />
      <main>
        {!log && <Login log={log} changeLog={logHandler} setUser={setUser} />}
        {log && <Home user={user} />}
      </main>
    </React.Fragment>
  );
}

export default App;
