import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Navegacion.css'

class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">ClaroVideo</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">All Videos</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <img src="https://media.metrolatam.com/2018/06/06/clarovideo01-b06f66ca7ef9055dfdcc23cec7143964-1200x600.jpg"/>
            </ul>
          </nav> 
        )
    }
}

export default Navegacion;