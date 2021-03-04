import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/controls/Nav';
import Footer from './components/controls/Footer';
import ProtectedRoute from './components/controls/ProtectedRoute';

import UserPage from './components/views/UserPage';
import LoginPage from './components/views/LoginPage';
import RegisterPage from './components/views/RegisterPage';

import './App.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router >
      <div className={classes.root}>
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <ProtectedRoute exact path="/home">
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/login" authRedirect="/home">
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/registration" authRedirect="/home">
            <RegisterPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
