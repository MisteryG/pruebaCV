import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Navegacion from './Containers/Navegacion/Navegacion.js'
import DataMovie from './components/DataMovie/DataMovie.js'
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/catElementos.js'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
const store = createStore (reducer, applyMiddleware(thunk))

const Root = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/menu/mexico" exact component={Navegacion}/>
                        <Route path="/movie/:title_uri/:id" exact component={DataMovie}/>
                        <Redirect from="/" to="/menu/mexico"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
