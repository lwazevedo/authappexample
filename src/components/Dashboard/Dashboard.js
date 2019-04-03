import React, { useContext, useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

import { AuthContext } from '../../containers';
import authService from '../../services/authService';

const urlSwapi = 'https://swapi.co/api';

const getIdUrl = url => {
  return url.replace(/[^0-9]/g, '');
};

const Dashboard = props => {
  const { setAuthenticated } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('films');
  const [url, setUrl] = useState(`${urlSwapi}/films`);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data.results);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const autLogout = () => {
    authService.singIn().then(() => {
      setAuthenticated(false);
      localStorage.clear();
      props.history.push('/');
    });
  };

  const doFetch = () => {
    setUrl(`${urlSwapi}/${query}`);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button type='button' onClick={autLogout}>
        Logout
      </button>
      <Link to='/home'>Home</Link>
      <hr />

      <form
        onSubmit={event => {
          doFetch();

          event.preventDefault();
        }}
      >
        <input
          type='text'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {!isError && data ? (
            data.map((item, k) => (
              <li key={k}>
                <Link to={`${query}/${getIdUrl(item.url)}`}>
                  {item.name ? item.name : item.title}
                </Link>
              </li>
            ))
          ) : (
            <>{!isError && <li>Nenhum item encontrado</li>}</>
          )}
        </ul>
      )}
    </div>
  );
};

export default withRouter(Dashboard);
