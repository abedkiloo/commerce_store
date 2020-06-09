import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container container-fluid">
                {/*{this.props.children}*/}

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>
                    Delete
                </button>
                {/*{this.state.tags.length === 0 && "No Items in the list"}*/}
                {/*{this.renderTags()}*/}
            </div>
        )
    }


    getBadgeClasses() {
        let style_classes = "badge badge-";
        style_classes += this.props.counter.value === 0 ? "warning" : "primary";
        return style_classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "zero" : value;
    }


}

export default Counter