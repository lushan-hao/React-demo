import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {actionCreators} from './store/';
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch
} from "./style";

const Header = props => {
  return (
    <HeaderWapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch
              onFocus={props.inputFocus}
              onBlur={props.inputBlur}
              className={props.focused ? "focused" : ""}
            />
          </CSSTransition>
          <i
            className={
              props.focused
                ? "focused iconfont iconfangdajing"
                : "iconfont iconfangdajing"
            }
          />
          <SearchInfo> 
            <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
          </SearchInfo>
        </SearchWrapper>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont iconAa" />
        </NavItem>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont iconziyuan" />
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWapper>
  );
};
const mapStateToProps = state => {
  return {
    //store 是 immutable 对象
    focused: state.get('header').get('focused')
  };
};
const mapDispathToProps = dispatch => {
  return {
    inputFocus() {
      dispatch(actionCreators.inputFocus());
    },
    inputBlur() {
      dispatch(actionCreators.inputBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
