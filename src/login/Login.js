import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const { onSuccess } = this.props;
    const uiConfig = {
      callbacks: {
        signInSuccess: onSuccess,
        uiShown: () => {
          this.setState({
            isLoading: false
          });
        }
      },
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      tosUrl: '<your-tos-url>'
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <CircularProgress />}
        <div id="firebaseui-auth-container" />
      </div>
    );
  }
}

export default Login;
