import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const prevAuthenticated =
    window.localStorage.getItem('authenticated') || false;
  const prevAuthBody = window.localStorage.getItem('authBody') || null;

  const [authenticated, setAuthenticated] = useState(prevAuthenticated);
  const [authBody, setAuthBody] = useState(prevAuthBody);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        authBody,
        setAuthBody
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
