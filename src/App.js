import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from './views/Home';
import Detail from './views/Detail';
import Error from './views/Error';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/detail/:characterId" component={Detail}/>
                    <Route path="/error" component={Error}/>
                    <Route component={Error}/>
                </div>
            </Router>
        );
    }
}

export default App;
