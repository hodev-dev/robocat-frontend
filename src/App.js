import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
