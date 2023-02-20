import Home from 'components/Home';
import Login from 'components/Login';
import MainHeader from 'components/MainHeader';
import React, { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
    const storedUserLoginInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoginInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // const addUserHandler = (email, password) => {
  //   setUserLogin((prevUser) => {
  //     return [{ userEmail: email, userPassword: password }];
  //   });
  // };

  return (
    <>
      <MainHeader
        // info={userLogin}
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {!isLoggedIn && <Login onAddInfo={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
