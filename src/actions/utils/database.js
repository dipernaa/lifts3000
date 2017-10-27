import firebase from 'firebase';

const readAsync = (ref) => (
  firebase.database().ref(ref).once('value').then((snapshot) => (
    snapshot.val()
  ))
);

export default {
  readAsync
};
