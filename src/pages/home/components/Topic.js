import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../style';
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img 
                        src="//upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        className="topic-pic"
                        alt="加载中"
                    ></img>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic;