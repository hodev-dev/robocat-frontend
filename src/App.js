import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
// route
import { PrivateRoute } from './helper/PrivateRoute';
import Loading from './pages/Loading';
// redux 
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import { authSelector } from './redux/authSlice';

function App() {

  const status = {
    SUCCESS: 0,
    LOADING: 1,
    FAILED: 2
  }

  const authState = useSelector(authSelector);
  const [authStatus, setAuthStatus] = useState(status.SUCCESS);

  useEffect(() => {
    console.log('at App console log', authState)
  }, [authState])

  return (
    <Router >
      <Switch>
        <Route exact path="/">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Login} />
        </Route>
        <Route path="/user">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Login} />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
