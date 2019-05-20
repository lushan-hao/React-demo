import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  HomeWrapper,
  HomeWrapperRight,
  HomeWrapperLeft,
  BackTop
} from "./style";
import Topic from "./component/Topic";
import Host from "./component/Host";
import Writer from "./component/Writer";
import List from "./component/List";
import { actionCreators } from "./store";

class Home extends PureComponent {
  goScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeWrapperLeft>
            <img
              className="banner-img"
              alt=""
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <Topic />
            <List />
          </HomeWrapperLeft>
          <HomeWrapperRight>
            <Host />
            <Writer />
          </HomeWrapperRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.goScrollTop}>顶部</BackTop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
