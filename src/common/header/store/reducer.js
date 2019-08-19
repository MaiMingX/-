import * as constants from './constants';
import { fromJS } from 'immutable';
// immutable.js
// 会生成一个对象
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn:false
});

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}