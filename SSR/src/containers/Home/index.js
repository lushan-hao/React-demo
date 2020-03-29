const React = require('react');

const Home = () =>{
    return <div>home</div>
}
Home.loadData = (state) => {
    //这个函数负责在服务端渲染之前，把这个路由需要的数据提前加载好  
     //根据用户访问路径，填充store里面的数据  
    StorageEvent.dispatch(getHomeList())
}

module.exports = {
    default : Home
}