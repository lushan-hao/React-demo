import React, { Component } from "react";
import { 
    HeaderWapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
 } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavSearch></NavSearch>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
        <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWapper>
    );
  }
}

export default Header;
