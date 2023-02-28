import React, { useContext } from 'react';
import Home from 'components/Home';
import Login from 'components/Login';
import MainHeader from 'components/MainHeader';
import AuthContext from 'components/context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
