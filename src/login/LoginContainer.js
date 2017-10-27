import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
import Login from './Login';
import { routeNames } from '../routes';

export class LoginContainer extends Component {
  componentWillMount() {
    if (firebase.auth().currentUser) {
      browserHistory.push(`/${routeNames.home}`);
    }
  }

  render() {
    return (
      <Login
        onSuccess={() => {
          browserHistory.push(`/${routeNames.home}`);
        }}
      />
    );
  }
}

export default LoginContainer;
