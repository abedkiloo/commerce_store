import {combineReducers} from "redux";
import {postsReducer} from './Posts/reducers'
export default combineReducers({
    posts:postsReducer
})