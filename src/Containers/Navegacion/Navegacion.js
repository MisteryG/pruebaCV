import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './Navegacion.css'
import * as actionTypes from '../../store/actions/index.js'
import filterElements from '../../store/selectors/filterElements.js'
import Busqueda from '../Busqueda/Busqueda.js'

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
      <div className="completo">
        <Busqueda/>
        <div className="listMovies">
            {valores}
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {
//       groups:state.groups
//     }
// }

const mapStateToProps = (state) => {
  return {
    groups:filterElements(state)
  }
}

// const filteredItems = (state) =>{
//   const totGroups = state.groups;
//   const findMovWord = state.findMovWord;
//   return totGroups.filter((item) => item.startsWith(findMovWord)) 
// }

const mapDispatchToProps = dispatch => {
  return {
    onLoadElements: () => dispatch(actionTypes.getConsult())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Navegacion);