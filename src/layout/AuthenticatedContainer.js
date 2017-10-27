import { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { routeNames } from '../routes';

export class AuthenticatedContainer extends Component {
  componentWillMount() {
    this.checkRouting();
  }

  componentWillReceiveProps() {
    this.checkRouting();
  }

  checkRouting = () => {
    if (!firebase.auth().currentUser) {
      browserHistory.replace(`/${routeNames.login}`);
    }
  }

  render() {
    if (!firebase.auth().currentUser) {
      return null;
    }

    return this.props.children;
  }
}

export default AuthenticatedContainer;
