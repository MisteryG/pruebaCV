import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './DataMovie.css'

class DataMovie extends Component {
    render() {
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
                            this.props.favoritePokemon.map(x=>{
                                return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.height}</td>
                                    <td>{x.base_experience}</td>
                                    <td><button onClick={()=>{
                                    
                                    }}>-</button></td>
                                </tr>
                            )})
                        }
                        </table>
                    </div>
        
        return (
            <div className="contGen">
                <img alt="" className="fondo" src={this.state.data.image_background}/>
                <div className="contenedor">
                    {tabla}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoritePokemon: state.pokemon
    }
}

  export default connect (mapStateToProps)(DataMovie);