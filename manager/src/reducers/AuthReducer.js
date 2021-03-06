import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/Types';

const INIT_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //this creates a new object and re writes the email to the state
      return { ...state, email: action.payload };
    case PASS_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    default:
      return state;
  }
};
