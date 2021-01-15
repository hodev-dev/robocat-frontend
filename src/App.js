import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { Axios } from './helper/axios_config';
// route
import { PrivateRoute } from './helper/PrivateRoute';
import Loading from './pages/Loading';
// redux 
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import { authSelector, login } from './redux/authSlice';

function App() {
  const status = {
    SUCCESS: 0,
    LOADING: 1,
    FAILED: 2
  }
  const dispatch = useDispatch();
  const authState = useSelector(authSelector);
  const [mount, setMount] = useState(false)
  const [authStatus, setAuthStatus] = useState(status.LOADING);

  const requestAuth = useCallback(() => {
    let delay = setTimeout(() => {
      Axios.get('authCheck').then((response) => {
        setAuthStatus(status.SUCCESS);
        dispatch(login(response));
      });
    }, 10000);
    return (delay) => {
      delay = null;
    }
  }, [dispatch])

  useEffect(() => {
    if (!mount) {
      setMount(true);
      requestAuth();
    }
  }, [requestAuth, mount])

  useEffect(() => {
    console.log({ authState });
  }, [authState]);

  return (
    <Router >
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/user">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Login} />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
