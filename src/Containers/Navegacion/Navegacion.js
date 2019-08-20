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
    const valores = this.props.groups.map((dat)=>
      <li className="liMovies" key={dat.id}>
        <div className="sMovie">
          <img alt={dat.title} src={dat.image_small} className="lMovie"/>
          <p className="txtMovie">{dat.title}</p>
        </div>
      </li>
    )
    return (
        <div className="listMovies">
            {valores}
        </div> 
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