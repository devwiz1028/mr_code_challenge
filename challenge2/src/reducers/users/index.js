import { ADD_USER_REQUEST, UPDATE_USER_FORMDATA } from '../../actions';

const initialState = {
  list: [],
  form: {
    firstName: '',
    lastName: '',
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        list: [
          ...state.list,
          payload,
        ],
        form: {
          firstName: '',
          lastName: '',
        },
      };

    case UPDATE_USER_FORMDATA:
      return {
        ...state,
        form: {
          ...state.form,
          ...payload,
        },
      };

    default:
      return state;
  }
};
