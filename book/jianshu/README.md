### 简书  

#### Header  

##### 项目搭建  
create-react-app jianshu  
css 文件在一个里面引入后，就会全局生效，所以不建议直接引入css文件  
所以运行styled-components  npm install styled-components --save  
将.css改成.js文件，引入，并且文件里面这样  
```
import {createGlobalStyle} from 'styled-components';
export const GlobalStyled = createGlobalStyle`
`
```
reset.css 统一不同浏览器样式布局  
```
import React from 'react';
import { GlobalStyled } from './style'
function App() {
  return (
    <div className="App">
    <GlobalStyled/>
          <div id="aa">Learn React</div>
    </div>
  );
}
```  
##### Header组件  
各个页面分别styled.js，就是建立了一个div,组件里当组件一样引入并且被使用，里面
```
import styled from 'styled-components';
export const HeaderWapper = styled.div`
    height: 56px;
    background: red;
`
```  
多行文本嵌变量 ${变量}  
搜索框采用变量进行变化  
安装redux和react-redux进行数据管理，因为前面的数据难以确保不会被后面其他组件所使用  
combineReducers用于整合reducer数据
```
import {combineReducers} from 'redux';
```
header里数据 
```
focused: state.header.focused
```  
整体reducer  
```
import {combineReducers} from 'redux';
import headerReducer from './../common/Header/store/reducer';
const reducer =  combineReducers({
    header:headerReducer
})
export default reducer;
```  
store/index.js里面     这样写导出去直接导index文件就行
```
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes';
export {reducer,actionTypes,actionCreators};
```  
##### immutable.js  
immutable对象  作用：防止数据被修改，将数据转换为不可修改的数据  
安装 npm install immutable --save  
第一步，将js对象转换为immutable对象，引入方法
```
import {fromJS} from 'immutable';
const defaultState = fromJS({
    focused: false
});
```
第二步   immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象    
组件里  
```
const mapStateToProps = state => {
  return {
    focused: state.header.get('focused')
  };
};
```
reducer.js 里  
```
 if(action.type === actionTypes.SEARCH_FOUCS){
        return state.set('focused',true)
    }
```  
统一数据格式  
将src文件夹下面state变成一个immutable对象 redux-immutable  
npm install redux-immutable --save  
热门搜索发送ajax请求  
安装thunk  npm install redux-thunk --save  
安装axios  npm install axios --save  
首先引入thunk后，dispatch发送action 在actionCreators里面创建一个action，在方法里发送axios请求，注意需要将js对象转换为immutable对象，然后在reducer里面进行数据修改  
##### 避免繁琐的ajax请求  
因为每次点击输入框都会发送ajax请求，所以将list传入，如果list为空，则发送ajax请求  
#### react路由  
安装 npm install react-router-dom --save  
```
  <BrowserRouter>
            <div>
              <Router path="/" exact render={() => <div />} />
            </div>
          </BrowserRouter>
```
严格模式 匹配  
在img里最好引入alt，不然报警告  
数据通过ajax请求获得  
##### PureComponent
数据被改变，组件会重新执行，shouldComponentUpdate(){}  可以使没有数据发生改变的页面不被重新渲染，提升性能优化，为了避免每个组件自己编写，所以PureComponent
PureComponent 代替 Component 每个组件都内置一个shouldComponentUpdate(){}  
因为数据使用immutable 所以不担心数据修改，否则有可能出错  
react-router 比 a标签好在，只加载一次html，a标签消耗性能  
dangerouslySetInnerHTML={{__html: this.props.content}} React中保证标签直接被识别，显示在页面中  
路由传参： 1.通过路径后面加上反斜杠传递参数  2.组件路由那里应该带上参数  3.this.props.match.params.  获取  
第二种： ?id= 在location下面的search 还需要手动解析  
style component V4 react16以后使用ref去获取dom元素  
重定向  
```
<Redirect to='/'/>
import { Redirect } from 'react-router-dom';
```
#### 异步组件
react-loadable npm install react-loadable --save  
在页面文件夹下面建立loadable.js
```
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});
export default () => <LoadableComponent/>
```
访问时直接访问loadable.js 但是这样传参就会出现错误，因为直接传给了loadable.js里面了  
解决方法：
```
import { withRouter } from 'react-router-dom';
export default connect(mapState, mapDispatch)(withRouter(Detail));
```
引入这个  
