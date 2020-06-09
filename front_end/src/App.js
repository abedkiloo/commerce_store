import React, {Component} from 'react';
import NavBar from './Components/nav_bar'
import './App.css';
import Counters from "./Components/counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 4},
            {id: 5, value: 6},
        ]

    };

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(counter => counter.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        )
    }

    handleDelete(id) {
        const counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({counters})

    }

    handleIncrement(on_coming_counter) {

        const new_counters = [...this.state.counters];
        const index = new_counters.indexOf(on_coming_counter);
        new_counters[index] = {...on_coming_counter};
        new_counters[index].value++;
        this.setState({counters: new_counters})

    }


    handleReset() {

        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter
        });
        this.setState({counters: counters})
    }

}

export default App;
