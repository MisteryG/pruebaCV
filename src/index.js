import React from 'react';
import ReactDOM from 'react-dom';
import Navegacion from './components/Navegacion/Navegacion.js'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router,Route} from 'react-router-dom'

const Root = () => {
    return (
        <div className="container">
            <Router>
                <Route path="/" component={Navegacion}/>
            </Router>
        </div>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
