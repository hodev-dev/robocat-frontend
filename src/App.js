import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
// route
import { PrivateRoute } from './helper/PrivateRoute';
import Explorer from './pages/explorer/Explorer';
import Genres from './pages/explorer/Genres';
import Platforms from './pages/explorer/Platforms';
import Stores from './pages/explorer/Stores';
import ForgetPass from './pages/ForgetPass';
import Loading from './pages/Loading';
// redux 
import Login from './pages/Login.jsx';
import Regester from './pages/Regester';
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
        <Route exact path="/" component={Explorer} />
        <Route exact path="/login">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Login} />
        </Route>
        <Route exact path="/regester">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Regester} />
        </Route>
        <Route exact path="/forget">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={ForgetPass} />
        </Route>
        <Route exact path="/user">
          <PrivateRoute loadingComponent={Loading} status={authStatus} isLogedIn={authState.isLogedIn} component={User} loginComponent={Login} />
        </Route>
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/platforms" component={Platforms} />
        <Route exact path="/stores" component={Stores} />
      </Switch>
    </Router >
  );
}

export default App;
