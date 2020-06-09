import React, {Component} from "react";
import PropsTypes from 'prop-types'
import {connect} from "react-redux"
import {fetchPosts} from "../../Store/Posts/actions";

class Posts extends Component {
    componentWillUnmount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h5> {post.body}</h5>
            </div>));
        return (
            <div>
                <h2>POSTS</h2>
                {postItems}
            </div>
        )

    }

}

PropsTypes.types = {
    fetchPosts: PropsTypes.func.isRequired,
    posts:PropsTypes.array.isRequired
};
const mapStateToProps = state => ({
    posts: state.posts.items
});
export default connect(mapStateToProps(), {fetchPosts})(Posts)