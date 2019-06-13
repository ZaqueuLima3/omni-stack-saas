import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions Types & Cretors
 */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial state
 */

export const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
});

/**
 * Reducer
 */
export const success = (state, { token }) => state.merge({ signedIn: true, token });

/**
 * Reducer types
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
