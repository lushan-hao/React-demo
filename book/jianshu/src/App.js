import React from 'react';
import { GlobalStyled } from './style';
import Header from './common/Header';
import './style.js';
import './statics/iconfont/iconfont.css';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <GlobalStyled/>
          <Header/>
    </Provider>
    </div>
  );
}

export default App;
