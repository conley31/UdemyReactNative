import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS } from '../actions/Types';

const INIT_STATE = { name: '', phone: '', shift: 'Monday' };

export default (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return { ...state, ...INIT_STATE };
    case EMPLOYEE_SAVE_SUCCESS:
      return INIT_STATE;
    default:
      return state;
  }
};
