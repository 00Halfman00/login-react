import React, { useContext } from 'react';

import NavBar from './components/NavBar/NavBar';
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import LogContext from './store/context';

function App() {
  const ctx = useContext(LogContext);
  console.log(ctx);
  return (
    <React.Fragment>
      <NavBar logged={ctx.log} logOut={ctx.logOut} />
      <main>
        {!ctx.log && <Login log={ctx.log} logIn={ctx.logIn} />}
        {ctx.log && <Home logOut={ctx.logOut} />}
      </main>
    </React.Fragment>
  );
}

export default App;
