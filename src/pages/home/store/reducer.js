import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id: 2,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id: 3,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/admin_banners/web_images/4697/be549894d00e999e878881fdddb2ccc4465e97a6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }],
    recommandList: [{
        id: 1,
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
        id: 2,
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    }]
});

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch(action.type) {
        default:
            return state;
    }
}