import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: this.props.initial_count_value,
        tags: ["tag1", 'tag2', 'tag3'],

    };

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    render() {

        return (
            <div className="container container-fluid">
                {this.props.children}

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'> Add</button>
                {/*{this.state.tags.length === 0 && "No Items in the list"}*/}
                {/*{this.renderTags()}*/}
            </div>
        )
    }


    renderTags() {
        if (this.state.tags.length === 0) return (<p>Items Not found</p>)
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        )

    }


    getBadgeClasses() {
        let style_classes = "badge badge-";
        style_classes += this.state.count === 0 ? "warning" : "primary";
        return style_classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }

    handleIncrement() {
        this.setState({count: this.state.count + 2})
    }
}

export default Counter