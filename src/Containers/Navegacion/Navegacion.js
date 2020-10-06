import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './Navegacion.css'
import * as actionTypes from '../../store/actions/index.js'
import Busqueda from '../Busqueda/Busqueda.js'
import styled from "styled-components"

class Navegacion extends Component {

  constructor(props) {
    super(props);
    this.state = {show:false}
  }

  render() {
    const { id, name, height, base_experience } = this.props.pokemon
    const Button = styled.button`
          background: "white";
          color: "black";
          font-size: 1em;
          margin: 1em;
          padding: 0.25em 1em;
          border: 2px solid palevioletred;
          border-radius: 3px;
        `;
      console.log("prueba-redux",this.props.favoritePokemon)
    return (
      <div className="encontrado">
        <Busqueda/>
        {
          this.props.pokemon && this.props.pokemon.hasOwnProperty('id')
          ?
          <div className="pokemonTable">
            <table id='students'>
              <tr key={`base_${id}`}>
                <th>ID</th>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Puntos de experiencia</th>
                <th>Agregar a favoritos</th>
              </tr>
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{height}</td>
                <td>{base_experience}</td>
                <td><button onClick={()=>{
                  let prueba = [] 
                  if (this.props.favoritePokemon && this.props.favoritePokemon.length!=0) {
                    prueba=this.props.favoritePokemon
                  }
                  prueba.push(this.props.pokemon)
                  this.props.addPokemon(prueba)
                }}>+</button></td>
              </tr>
            </table>
          </div>
        : null
        }
        {/* {  deberia de ir la funcion para llenar la tabla
          this.state.show
          ? <DataPoke/>
          : null
        } */}
        <div className="centrado">
          <Button onClick={()=>{
            this.setState({show:true})
          }}>Favoritos</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon:state.pokemon,
    favoritePokemon: state.favoritePokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPokemon: (addPokemon) => dispatch(actionTypes.addPokemon(addPokemon))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Navegacion);