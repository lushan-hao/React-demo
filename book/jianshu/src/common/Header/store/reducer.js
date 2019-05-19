import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOUCS) {
    return state.set("focused", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  if (action.type === actionTypes.GET_HEADER_LIST) {
    return state.set("list", action.data).set("totalPage", action.totalPage);
  }
  if (action.type === actionTypes.MOUSE_ENTER) {
    return state.set("mouseIn", true);
  }
  if (action.type === actionTypes.MOUSE_LEAVE) {
    return state.set("mouseIn", false);
  }
  if (action.type === actionTypes.CHANGE_PAGE) {
    return state.set("page", action.page); 
  }
  return state;
};
