import React from "react";
import { GlobalStyled } from "./style";
import Header from "./common/Header";
import "./style.js";
import "./statics/iconfont/iconfont.css";
import store from "./store";
import { Provider } from "react-redux";
import {HashRouter, Route } from "react-router-dom";     //, BrowserRouter
import Home from './pages/home/index';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <GlobalStyled />
          <HashRouter>
          <Header />
            <div>
              <Route path="/" exact component={Home}/>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/:id' exact component={Detail}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
