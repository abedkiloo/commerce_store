import JsonplaceHolderService from "../../Services/JsonplaceHolderService";
import {FETCH_POSTS, NEW_POST} from './actionTypes'

export const fetchPosts = () => dispatch => {
    return JsonplaceHolderService.getPosts()
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPosts = postData => dispatch => {
    return JsonplaceHolderService.createPosts(postData)
        .then(post => {
                dispatch({
                    type: NEW_POST,
                    payload: post
                })
            }
        )
};