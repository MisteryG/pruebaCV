import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './Navegacion.css'
import * as actionTypes from '../../store/actions/index.js'

class Navegacion extends Component {

  UNSAFE_componentWillMount() {
    this.props.onLoadElements()
  }

  render() {
    console.log('mensajes',this.props.groups)
      return (
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">ClaroVideo</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <img className="log" alt="" src="https://media.metrolatam.com/2018/06/06/clarovideo01-b06f66ca7ef9055dfdcc23cec7143964-1200x600.jpg"/>
            </ul>
          </nav> 
      )
  }
}

const mapStateToProps = (state) => {
  return {
    groups:state.groups
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLoadElements: () => dispatch(actionTypes.getConsult())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Navegacion);