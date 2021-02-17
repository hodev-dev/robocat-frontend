import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';
// route
import { PrivateRoute } from './helper/PrivateRoute';
import CreatePost from './pages/CreatePost';
import Explorer from './pages/explorer/Explorer';
import Genres from './pages/explorer/Genres';
import Platforms from './pages/explorer/Platforms';
import Stores from './pages/explorer/Stores';
import Tags from './pages/explorer/Tags';
import ForgetPass from './pages/ForgetPass';
import Detail from './pages/game/Detail';
import Game from './pages/game/Game';
import Screenshot from './pages/game/Screenshot';
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
      <ScrollMemory />
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
        <Route exact path="/tags" component={Tags} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/screenshot" component={Screenshot} />
        <Route exact path="/createPost" component={CreatePost} />
        <Route>
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
