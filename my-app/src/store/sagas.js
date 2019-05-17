import { takeEvery, put } from "redux-saga/effects";
import { INIT_LIST_S } from "./actionTypes";
import { initList } from "./actionCreator";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("/api/todolist");
    const action = initList(res.data);
    yield put(action);
  } catch (e) {
    alert("数据请求404");
  }
}

function* mySaga() {
  yield takeEvery(INIT_LIST_S, getInitList);
}

export default mySaga;
