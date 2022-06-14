import React, { useState, useEffect } from 'react';

const LogContext = React.createContext({
  logIn: (email, password) => {},
  logOut: () => {},
  log: false,
});

export const ContextProvider = (props) => {
  const [log, setLog] = useState(false);

  useEffect(() => {
    if ('password02' === localStorage.getItem('oscar@yahoo.com')) {
      setLog(true);
    }
  }, []);

  const logInHandler = (email, password) => {
    localStorage.setItem(email, password);
    setLog(true);
  };

  const logOutHandler = () => {
    setLog(false);
    localStorage.removeItem('oscar@yahoo.com');
  };

  return (
    <LogContext.Provider
      value={{
        logIn: logInHandler,
        logOut: logOutHandler,
        log: log,
      }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

export default LogContext;
