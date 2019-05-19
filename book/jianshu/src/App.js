import React from "react";
import { GlobalStyled } from "./style";
import Header from "./common/Header";
import "./style.js";
import "./statics/iconfont/iconfont.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home/index';
import Detail from './pages/detail/index';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <GlobalStyled />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}/>
              <Route path="/detail" exact component={Detail}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
