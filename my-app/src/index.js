import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';
// import AList from './AList';
import Cin from './Cin';
// import List from './List';
import {Provider} from 'react-redux';
import store1 from './store1';

const APP = (
    <Provider store = {store1}>
        <Cin />
    </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
