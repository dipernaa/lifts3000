import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { getUser } from '../actions';

export class HomeContainer extends Component {
  componentWillMount() {
    const currentUser = firebase.auth().currentUser;
    this.props.getUser(currentUser.uid);
  }

  render() {
    const currentUser = firebase.auth().currentUser;

    return (
      <div>
        {currentUser.displayName}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { user } = state;

  return {
    userData: user.userData
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
