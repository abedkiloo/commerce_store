import {FETCH_POSTS} from './actionTypes'

export const fetchPosts = () => dispatch => {
        return JsonplaceHolderService.getPosts()
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPosts=()=>{

}