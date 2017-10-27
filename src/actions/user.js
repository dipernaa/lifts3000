import database from './utils/database';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_USER } from '../constants/actionTypes';

const getUser = (userId) => (
  createAsyncAction(GET_USER, () => database.readAsync(`users/${userId}`))
);

export default {
  getUser
};
