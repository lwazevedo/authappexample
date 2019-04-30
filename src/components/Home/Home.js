import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../containers';

const Home = () => {
  const { authBody } = useContext(AuthContext);
  const { username } = JSON.parse(authBody) || '';
  return (
    <div>
      <h2>Bem Vindo {username} </h2>
      <Link to='/dashboard'>Dasboard</Link>
    </div>
  );
};

export default Home;
