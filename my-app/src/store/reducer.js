import {CHANGE_INPUT_VALUE, CHANGE_ADD_ITEM, CHANGE_DEL_ITEM, INIT_LIST} from './actionTypes';
const defaultState = {
  inputValue: "",
  list: [1, 2]
};
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === CHANGE_ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === CHANGE_DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    // console.log(action.value);
    newState.list.splice(action.value,1);
    return newState;
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
  return state;
};
