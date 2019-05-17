import React, { Component } from "react";

import "antd/dist/antd.css";
import store from "./store/";
import {getInputChange, getAddItem, getDelItem, initListS} from './store/actionCreator';  //thunk时getList加入
import AListUI from './AListUI';
// import axios from 'axios';
// import {CHANGE_INPUT_VALUE, CHANGE_ADD_ITEM, CHANGE_DEL_ITEM} from './store/actionTypes';

class AList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.inputChange = this.inputChange.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <AListUI 
      inputValue={this.state.inputValue}
      inputChange={this.inputChange}
      addItem = {this.addItem}
      list = {this.state.list}
      delItem = {this.delItem}
    />
    )  
  }

  componentDidMount(){
    const action = initListS();
    store.dispatch(action);
    //正常获取
    // axios.get('/api/todolist').then((res)=>{
    //               const data = res.data;
    //               const action = initList(data);
    //               store.dispatch(action)
    //             }).catch(()=>{
    //               alert("error");
    //             })
    //thunk中间件
    // const action = getList();
    // store.dispatch(action);
  }

  inputChange(e) {
    const action = getInputChange(e.target.value);
    store.dispatch(action);
  }
  addItem() {
    const action = getAddItem();
    store.dispatch(action);
  }
  delItem(index) {
    const action = getDelItem(index);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default AList;
