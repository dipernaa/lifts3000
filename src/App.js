import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import Promise from 'promise-polyfill';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'whatwg-fetch'; // fetch API polyfill
import configureStore from './store/configureStore';
import routes from './routes';

const firebaseConfig = {
  apiKey: 'AIzaSyBniWXaco2Vq8z6s4TfpQHsqIAuKLXnqqQ',
  authDomain: 'lifts3000.firebaseapp.com',
  databaseURL: 'https://lifts3000.firebaseio.com',
  projectId: 'lifts3000',
  storageBucket: '',
  messagingSenderId: '965515991235'
};

firebase.initializeApp(firebaseConfig);

injectTapEventPlugin();

if (!window.Promise) {
  window.Promise = Promise;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        this.setState({ isLoading: false });
      })
    };
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        {routes}
      </Provider>
    );
  }
}

export default App;
