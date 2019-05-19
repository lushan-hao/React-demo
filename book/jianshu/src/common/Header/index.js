import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store/";
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
  SearchInfoSwitch,
  SearchInfoItem,
  Searchdiv
} from "./style";

class Header extends Component {
  getList() {
    const {
      focused,
      list,
      mouseIn,
      page,
      mouseEnter,
      mouseLeave,
      changePage,
      totalPage
    } = this.props;
    const JSList = list.toJS();
    const pageList = [];
    if(JSList.length){
      for (let i = (page - 1) * 10; i < page * 10; i++) { 
      pageList.push(
        <SearchInfoItem key={JSList[i]}>{JSList[i]}</SearchInfoItem>
      )
    }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePage(page, totalPage,this.spinIcon)}>
            <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont iconspin" />
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <Searchdiv>{pageList}</Searchdiv>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, inputBlur, inputFocus ,list } = this.props;
    return (
      <HeaderWapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                onFocus={() => inputFocus(list)}
                onBlur={inputBlur}
                className={focused ? "focused" : ""}
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? "focused iconfont iconfangdajing a"
                  : "iconfont iconfangdajing a"
              }
            />
            {this.getList()}
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
  }
}
const mapStateToProps = state => {
  return {
    //store 是 immutable 对象
    focused: state.get("header").get("focused"),
    list: state.get("header").get("list"),
    page: state.get("header").get("page"),
    totalPage: state.get("header").get("totalPage"),
    mouseIn: state.get("header").get("mouseIn")
  };
};
const mapDispathToProps = dispatch => {
  return {
    inputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getHotList());
      dispatch(actionCreators.inputFocus());
    },
    inputBlur() {
      dispatch(actionCreators.inputBlur());
    },
    mouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    mouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    changePage(page, totalPage,spin) {
      let startAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(startAngle){
        startAngle = parseInt(startAngle,10);
      }else{
        startAngle = 0;
      }
      spin.style.transform = 'rotate('+( startAngle + 360)+'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
