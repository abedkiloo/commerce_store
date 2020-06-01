import Counter from "./counter";
import React, {Component} from "react";

export default class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 4},
            {id: 5, value: 6},
        ]

    };

    render() {
        return (
            <div>
                {
                    this.state.counters.map(
                        counter =>
                            <Counter
                                key={counter.id}
                                initial_count_value={counter.value}>
                                <h4>Counter : #{counter.value}</h4>
                            </Counter>
                    )
                }
            </div>
        )
    }
}