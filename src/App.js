import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import Home from './Views/Home/Home';
import './App.css';

function App(props) {
    return (
        <BrowserRouter>
            <div className='m-auto' id='top'>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
