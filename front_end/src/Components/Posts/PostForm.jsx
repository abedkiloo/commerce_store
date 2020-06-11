import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPosts} from "../../Store/Posts/actions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br/>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label>
                        <br/>
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };

    onSubmit(event) {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPosts(post)
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

}

PostForm.propType = {
    createPosts: PropTypes.func.isRequired
};

export default connect(null, {createPosts})(PostForm)