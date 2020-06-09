import {FETCH_POSTS} from './actionTypes'


const initialState = {
    items: [],
    item: {},
}
export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state
    }
}