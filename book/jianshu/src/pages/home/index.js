import React, { Component } from "react";
import { HomeWrapper, HomeWrapperRight, HomeWrapperLeft } from "./style";
import Topic from './component/Topic';
import Host from './component/Host';
import Writer from './component/Writer';
import List from './component/List';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
        <HomeWrapperLeft>
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
        </HomeWrapperLeft>
            <HomeWrapperRight>
                <Host></Host>
                <Writer>
                </Writer>
            </HomeWrapperRight>
        </HomeWrapper>
      </div>
    );
  }
}

export default Home;
