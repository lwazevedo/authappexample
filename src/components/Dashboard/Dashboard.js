import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import { Search as SearchIcon, Close as CloseIcon } from '@material-ui/icons';

import {
  Paper,
  InputBase,
  IconButton,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  Snackbar,
  Button
} from '@material-ui/core';

import axios from 'axios';
import DashboardTheme from './DashboardTheme';

const urlSwapi = 'https://swapi.co/api';
const msgError = ' Something went wrong ...';
const getIdUrl = url => {
  return url.replace(/[^0-9]/g, '');
};

const Dashboard = props => {
  const { classes } = props;
  const queueError = [];
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('films');
  const [url, setUrl] = useState(`${urlSwapi}/films`);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msgInfo, setMsgInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (isError) {
        setIsError(false);
      }
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data.results);
      } catch (error) {
        setData([]);
        queueError.push({ msgError, key: new Date().getTime() });
        processQueue();
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const processQueue = () => {
    if (queueError.length > 0) {
      setMsgInfo(queueError.shift());
      setIsError(true);
    }
  };

  const doFetch = () => {
    if (!data.length && query) {
      queueError.push({ msgError, key: new Date().getTime() });
      processQueue();
    }
    setUrl(`${urlSwapi}/${query}`);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsError(false);
  };

  return (
    <Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography color='primary' variant='subtitle1' align='left'>
          https://swapi.co/api/
        </Typography>
        <InputBase
          className={classes.input}
          placeholder='Complete the url'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <IconButton
          className={classes.iconButton}
          aria-label='Search'
          onClick={doFetch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading ? (
        <div className={classnames(classes.root)}>
          <CircularProgress className={classes.progress} />
        </div>
      ) : (
        <main>
          <div className={classnames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {data &&
                data.map((item, k) => (
                  <Grid item key={k} xs={12} sm={12} md={6} lg={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Link to={`${query}/${getIdUrl(item.url)}`}>
                          {item.name ? item.name : item.title}
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </div>
        </main>
      )}
      <Snackbar
        key={msgInfo.key}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={isError}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={processQueue}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id='message-id'>{msgInfo.msgError}</span>}
        action={[
          <Button
            key='undo'
            color='secondary'
            size='small'
            onClick={handleClose}
          >
            UNDO
          </Button>,
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Fragment>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DashboardTheme)(withRouter(Dashboard));
