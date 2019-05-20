import axios from "axios";
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const changHomeData = result => ({
  type: actionTypes.GET_DATA,
  topicList: result.topicList,
  hotList: result.hotList,
  HostList: result.HostList
});

const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const result = res.data.data;
        dispatch(changHomeData(result));
      })
      .catch(err => {
        console.log(err);
        alert("sorry, data is miss");
      });
  };
};

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const  page1 = page + 1;
      dispatch(addHomeList(result, page1));
      console.log(page);
		});
	}
}

export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})
