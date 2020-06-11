import React, {Component} from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './Store/store'
import Posts from "./Components/Posts/Posts";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Posts/>

                </React.Fragment>
            </Provider>
        )
    }


}

export default App;
