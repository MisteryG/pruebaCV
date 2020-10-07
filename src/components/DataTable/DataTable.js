import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './DataTable.css'
import styled from "styled-components"
import * as actionTypes from '../../store/actions/index.js'

class DataTable extends Component {

    render() {
        const Button = styled.button`
          background: "white";
          color: "black";
          font-size: 1em;
          margin: 1em;
          padding: 0.25em 1em;
          border: 2px solid palevioletred;
          border-radius: 3px;
        `;
        const tabla = <div className="pokemonTable">
                        <table id='students'>
                        <tr key={`base`}>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Peso</th>
                            <th>Puntos de experiencia</th>
                            <th>Agregar a favoritos</th>
                        </tr>
                        {
                            this.props.favoritePokemon.length>0 && this.props.favoritePokemon.map(x=>{
                                return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.height}</td>
                                    <td>{x.base_experience}</td>
                                    <td><button id={x.id} onClick={(x)=>{
                                        let prueba = this.props.favoritePokemon
                                        let i = this.props.favoritePokemon.findIndex(element => element.id==x.target.id)
                                        if (i>=0) {
                                            prueba.splice(i,1);
                                            this.props.addPokemon(prueba)
                                            this.forceUpdate()
                                        }
                                    }}>-</button></td>
                                </tr>
                            )})
                        }
                        </table>
                    </div>
        
        return (
            <div className="contGen">
                <div className="contenedor">
                    <Link to={`/menu/mexico`}>
                        <Button onClick={()=>{
                        }}>Busqueda</Button>
                    </Link>
                </div>
                <div className="contenedor">
                    {tabla}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoritePokemon: state.favoritePokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPokemon: (addPokemon) => dispatch(actionTypes.addPokemon(addPokemon))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DataTable);