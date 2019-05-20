import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [],
  hotList: [],
  HostList: [],
  hotPage: 1,
  showScroll: false
});
export default (state = defaultState, action) => {
  if (action.type === actionTypes.GET_DATA) {
    return state.merge({
      topicList: fromJS(action.topicList),
      hotList: fromJS(action.hotList),
      HostList: fromJS(action.HostList)
    });
  }
  if (action.type === actionTypes.ADD_ARTICLE_LIST) {
    return state.merge({
      hotList: state.get("hotList").concat(action.list),
      hotPage: action.nextPage
    });
  }
  if (action.type === actionTypes.TOGGLE_SCROLL_TOP) {
    return state.set('showScroll', action.show);
  }
  return state;
};