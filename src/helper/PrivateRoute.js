import React from 'react';
import {
  Route
} from "react-router-dom";

const PrivateRoute = (props) => {
  const status = {
    SUCCESS: 0,
    LOADING: 1,
    FAILED: 2
  }
  let render;
  if (props.status !== status.LOADING) {
    render = (props.isLogedIn === true) ? <Route component={props.component} /> : <Route component={props.loginComponent} />
  } else {
    render = <Route component={props.loadingComponent} />
  }
  return (
    <>
      {render}
    </>
  )
}

export { PrivateRoute };

