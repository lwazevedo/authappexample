import React, { useContext } from 'react';
import { AuthContext } from '../../containers';
import { withRouter, Link } from 'react-router-dom';
import authService from '../../services/authService';

const Dashboard = props => {
  const { setAuthenticated } = useContext(AuthContext);

  const autLogout = () => {
    authService.singIn().then(() => {
      setAuthenticated(false);
      props.history.push('/');
    });
  };

  const autChecked = async () => {
    const x = await authService.testing()
    if (x) {
      console.log(x)
    }
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={autLogout}>Logout</button>
      <button onClick={autChecked}>autChecked</button>
      <Link to='/home'>Home</Link>
    </div>
  );
};

export default withRouter(Dashboard);
