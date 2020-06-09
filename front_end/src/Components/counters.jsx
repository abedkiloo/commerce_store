import Counter from "./counter";
import React, {Component} from "react";

export default class Counters extends Component {
    render() {
        const {onDelete, onIncrement, onReset, counter} = this.props;

        return (
            <div>
                <button className='btn btn-secondary btn-sm' onClick={onReset}>Reset</button>
                {
                    this.props.counters.map(
                        counter =>
                            <Counter
                                key={counter.id}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                counter={counter}>
                                <h4>Counter : #{counter.value}</h4>
                            </Counter>
                    )
                }
            </div>
        )
    }


}