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
                  let i = this.props.favoritePokemon.findIndex(element => element.id==this.props.pokemon.id)
                  if (i<0){
                    if (this.props.favoritePokemon && this.props.favoritePokemon.length!=0) {
                      prueba=this.props.favoritePokemon
                    }
                    prueba.push(this.props.pokemon)
                    this.props.addPokemon(prueba)
                  }
                }}>+</button></td>
              </tr>
            </table>
          </div>
        : null
        }
        <div className="centrado">
          <Link to={`/pokemon/favorito`}>
            <Button onClick={()=>{
              this.props.clearPokemon()
            }}>Favoritos</Button>
          </Link>
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
    addPokemon: (addPokemon) => dispatch(actionTypes.addPokemon(addPokemon)),
    clearPokemon: () => dispatch(actionTypes.clearPokemon())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Navegacion);