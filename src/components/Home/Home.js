import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../containers';

const Home = () => {
  const { authBody } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (authBody) {
      setUserData(JSON.parse(authBody).userData);
    }
  }, [authBody]);

  return (
    <div>
      <h2>Bem Vindo {userData.email} </h2>
      <Link to='/dashboard'>Dasboard</Link>
    </div>
  );
};

export default Home;
