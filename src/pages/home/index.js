import React, { Component } from 'react';
import { HomeWrapper,HomeLeft ,HomeRight} from './style';
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommand from './components/Recommand'
import List from './components/List'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="加载中" src="http://upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Writer />
                    <Recommand />
                </HomeRight>
            </HomeWrapper>
            
        )
    }
}

export default Home;