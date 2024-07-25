// Define a new action type
export const SET_NAME = 'SET_NAME';
export const CHANGE_NAME = 'CHANGE_NAME'

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});
export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});
