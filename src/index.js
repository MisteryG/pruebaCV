import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Navegacion from './Containers/Navegacion/Navegacion.js'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/catElementos.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
const store = createStore (reducer, applyMiddleware(thunk))

const Root = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Navegacion}/>
                </Router>
            </Provider>
        </div>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
