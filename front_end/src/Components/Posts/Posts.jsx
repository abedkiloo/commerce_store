import React, {Component} from "react";
import PropsTypes from 'prop-types'
import {connect} from "react-redux"
import {fetchPosts} from "../../Store/Posts/actions";
import PostForm from "./PostForm";

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h5> {post.body}</h5>
            </div>));
        return (
            <div>
                <PostForm/>
                <h2>POSTS</h2>
                {postItems}
            </div>

        )

    }


}

Posts.propTypes = {
    fetchPosts: PropsTypes.func.isRequired,
    posts: PropsTypes.array.isRequired,
    newPost: PropsTypes.object
};
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStateToProps, {fetchPosts})(Posts)