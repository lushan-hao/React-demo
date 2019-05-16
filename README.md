# React-demo
这是我学习react知识代码，和一个仿简书demo
## 知识点
React Fiber 意思是React 16以后的版本  
jsx语法，必须引入react  
JSX 在js里面写一些html标签，使用自己的组件，组件开头必须首字母大写，原始标签，小写字母开头  
Fragment占位符可以省去dom元素中最外面的div  
改变state里面的值只能调用this.setState()这个方法进行改变  
jsx里面改变需要外面用{}包裹起来  
JSX细节语法补充  注释{/*hah*/}，样式不能用class用className  
dangerouslySetInnerHTML={{__html:item}}对输入的进行转义   
label中for对应input选中，input配和id react认为for是循环，所以label不用for用htmlFor  
组件传值，父传子  父组件给子组件传值,通过属性进行传递，子组件接收内容用this.props.属性名，进行接收值，传递函数时，注意this指向,.bind(this)
子传父   
react衍生出 声明式开发：减少大量dom操作  可以与其它框架共存  组件化  单向数据流：子组件不能更改父组件数据  视图层框架：react只搭建视图，传值时使用其他数据层框架  函数式编程：更能比较好测试  
PropTypes 和 DefaultProps   
PropTypes限制父组件给子组件传值类型
不报错证明正确
```
import PropTypes from 'prop-types';
TodoItem.propTypes = {
    content : PropTypes.string,
    content : PropTypes.string.isRequired,          //必须传递
}
```
如果错误会
```
index.js:1437 Warning: Failed prop type: Invalid prop `index` of type `number` supplied to `TodoItem`, expected `string`.
```
DefaultProps 类似于上面，用于设置默认值
```
TodoItem.defaultTypes = {
    content : 'hello'
}
```  
当组件的state或者props发生改变时，render函数就会出重新执行  
当父组件的render函数被运行时，他的子组件的render都将被重新运行  
##### 虚拟DOM  
1.state 数据  
2.JSX 模板  
3.数据 + 模板 结合，生成真实DOM，来显示  
4.state 发生改变  
5.数据 + 模板 结合，生成真实DOM，替换原始DOM  
缺陷 ：第一次生成完整真实DOM片段，第二次替换，非常消耗性能  
更改 ：第二次生成新DOM,和第一次对比，找出不同点，替换更改的DOM中元素（缺陷：提升不明显）  
所以提出虚拟DOM  
虚拟DOM：就是js对象，用来描绘真实DOM  
真实DOM
```
<div id="abc"><span>hello world</span></div>
```
虚拟DOM(可以理解为数组或者对象)  
```
['div',{id:'abc'},['span',{},'hello world']]
```
结论 虚拟DOM就是js对象，比较js对象比比较DOM极大的提高性能  
底层真实是先生成虚拟DOM在生成真实DOM  
JSX -> createElement -> JS对象 -> 真实DOM  
```
return <div>item</div>
```
等价于  下面的更接近底层
```
return React.createElement('div',{},'item')
```
虚拟DOM优点  
1.性能提升  
2.它使跨端应用得以实现 React Navtive  
##### 虚拟DOM的Diff算法  
两个虚拟DOM的比对  同级比较  
如果第一级就不同，下面的都不比较，直接重新渲染  
将节点循环，并且赋key值，所以最好不用index，因为index可能发生变化   
可以用item（内容）当key值  
setState也有性能优化，如果短时间有多个setState，就会执行一次  
##### React中ref使用  
ref={(input) => {this.input = input}}input(dom节点)   帮助我们直接获取dom元素   
此时this.input = e.target   //不建议，因为和setState一起用，有个坑，setState是个异步函数，不会立即执行  
setState(()=>{},()=>{})第二个函数代表异步执行完成之后才会执行  
##### 生命周期函数  
定义：在某些时刻会自动调用执行的函数  
Mounting   
componentWillMount(){}  在组件即将被挂载到页面自动执行  
render(){}         数据改变时，只有render执行  
componentDidMount(){}   在组件被页面渲染时自动执行
Updation  数据发生变化  
props相对于state，第一步先执行componentWillReceiveProps  
shouldComponentUpdate   组件被更新之前，返回布尔型结果，用来是否更改   
componentWillUpdate   组件被更新之前，在shouldComponentUpdate返回true之后执行
componentDidUpdate    组件被更新完成会执行  
（componentWillReceiveProps  当一个组件从父组件接收了参数，只要父组件的render函数重新执行了，子组件componentWillReceiveProps就会执行）  
Unmounting      
componentWillUnmount  组件从页面即将去除，将会执行  
##### 生命周期函数使用场景  
所有生命周期函数都可以不存在，render必须存在，因为reac复制组件，底层没有render函数  
shouldComponentUpdate 返回false，可以用于父组件被渲染，子组件不强制更新  
componentDidMount(){}  用于获取ajax请求  
##### 使用Charles进行接口数据模拟  
animation 最后一个参数加入forwards;可以保持最后一帧的动画效果  
##### react动画框架react-transition-group实现动画  
npm install react-transition-group --save  安装  
fade对应CSSTransition标签里面的classNames    .fade-enter 刚入场   .fade-enter-active  正在入场   .fade-enter-done  入场结束  
.fade-exit 出场第一个动画   .fade-enter-active  出场  .fade-enter-done  结束  
unmountOnExit 消失时直接消除dom元素，还有很多钩子函数   
网址：http://reactcommunity.org/react-transition-group/css-transition  
import TransitionGroup（最外部） 用于一组全部具有动画，每个元素用CSSTransition（具体元素外部）  
#### Redux  
React只是轻量级视图框架   
Redux公共数据池 Redux = Reducer + Flux  Flux最早的，有缺陷   
###### Redux工作流程  
借书的人  -   借书的话   -    图书管理员     -      图书管理手册     （配合截图）  
##### antd  
安装  npm install antd --save  
引入  import 'antd/dist/antd.css';  import { Input } from 'antd';  
##### 创建redux中的store  
安装 npm install redux --save  
创建文件  src文件下创建store文件夹，文件夹里面创建index.js（图书管理员） 
```
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;
```
创建reducer.js（图书记事本）  
```
const defaultState = {
    inputValue: '123',
    list: [1,2]
}
export default (state=defaultState,action)=>{
    return state;
}
```
引入方式并使用
```
import store from './store/';
 constructor(props){
    super(props);
    this.state = store.getState();
   }
使用value={this.state.inputValue}
```
##### Action和Reducer的编写  
谷歌浏览器中安装redux devtools插件  
组件中，state改变时函数改变，函数里
```
inputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
```
然后
reducer是拿到之前的数据和操作指令，进行操作，返回新的数据     
reducer可以接受state但是不能更改state，需要拷贝一份出来  
```
export default (state=defaultState,action)=>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}
```
然后组件里 
```
 constructor(props){
    super(props);
    this.state = store.getState();
    this.storeChange= this.storeChange.bind(this);
    store.subscribe(this.storeChange);
   }   
storeChange(){
    this.setState(store.getState());
  }
```
##### action.type拆分  
store 文件夹下面建立actionType.js   里面
```
export const CHANGE_INPUT_VALUE = "change_input_value";
export const CHANGE_ADD_ITEM = "change_add_item";
export const CHANGE_DEL_ITEM = "change_del_item";
```  
优点：可以避免某一个字符串写错，而不报错，这么做可以在页面报错（因为常量和变量出错会报异常）  
##### 使用actionCreator统一创建action  
store 文件夹下面建立actionCreator.js   里面  
```
import {CHANGE_INPUT_VALUE, CHANGE_ADD_ITEM, CHANGE_DEL_ITEM} from './actionTypes';

export const getInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
```
组件里面  ,
```
import {getInputChange, getAddItem, getDelItem} from './store/actionCreator';
inputChange(e) {
    const action = getInputChange(e.target.value);
    store.dispatch(action);
  }
```
优点：提高代码的可维护性，自动化测试也会很方便  
##### Redux复习和补充  
store唯一的，只有store能改变自己的内容（reducer不能改变，所以新建立一个进行改变），Reducer必须是纯函数（给定固定的输入，会有固定的输出，而且不会有副作用）  
核心API createStore 可以创建store  
store.dispatch 派发action，会传递给store  
store.getState 帮我们获取到store所有数据内容  
store.subscribe让我们订阅store改变，只要改变接收的回调函数就会被执行  
#### Redux进阶  
##### UI组件与容器组件的拆分  
UI组件负责页面渲染，容器组件负责逻辑，分成两个文件  
容器组件中值和函数通过，通过父组件传  
##### 无状态组件  
当组件只有一个render函数，就可以用无状态组件  
优势：性能比较高  
##### Redux中发送异步请求获取数据  
##### 使用Redux-thunk中间件进行ajax请求发送  
安装redux-thunk  npm install --save redux-thunk
https://github.com/reduxjs/redux-thunk  store/index.js引入  
两个中间件冲突，所以如下写
```
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
const store = createStore(reducer, enhancer);
export default store;
```
它是redux的中间件，不是react  
thunk使用之前，acion只能传递js对象，thunk使action可以传递函数  
因为异步函数放在生命周期中可能会越来越复杂，不如放在actionCreater.js里面  
##### Redux中间件  
中间件是action和store之间，中间件就是对Dispatch的封装  
dispatch如果接收对象直接传给store，如果是函数，就先执行  
##### Redux-saga中间件使用  
安装  npm install --save redux-saga  
```
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import todomySaga from './sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todomySaga);
```
页面发送action，然后配置saga进行接收，接收到类型相匹的就会运行后面的函数  
##### React-Redux使用  
index.js里面
```
import {Provider} from 'react-redux';
import store1 from './store1';
const APP = (
    <Provider store = {store1}>
        <List />
    </Provider>
)
ReactDOM.render(APP, document.getElementById('root'));
```   
Provider引入后，它标签里面的所有组件都可以引用store  
组件里connect引入，用于连接组件和store,将state里面的值赋给props，所以调用采用this.props.inputValue,方法直接在mapDispatchToProps里面写，然后reducer.js里面写功能  
```
//获取store数据
const mapStateToProps = (state) =>{
     return {
         inputValue: state.inputValue
     }
}
//修改store数据
const mapDispatchToProps = (dispatch) => {
    return {
        valueChange(e){
            const action ={
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
```
可以理解为组件是一个UI组件，connect将UI组件和逻辑联系在一起就成为了容器组件  

























