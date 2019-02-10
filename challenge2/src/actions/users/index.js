export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const UPDATE_USER_FORMDATA = 'UPDATE_USER_FORMDATA';

export function addUser(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_REQUEST,
      payload: data,
    });
  };
}

export function updateUserFormData(data) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_FORMDATA,
      payload: data,
    });
  };
}
