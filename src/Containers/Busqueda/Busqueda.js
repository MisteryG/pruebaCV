import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Busqueda.css'
import * as actionTypes from '../../store/actions/index.js'

class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    keyPress(e) {
        if(e.keyCode === 13){
            let valIngresar = e.target.value
            this.props.findPokemon(valIngresar)
        }
    }

    render () {
        return (
            <div className="barBusqueda">
                <input type='text' placeholder='Busqueda de pokemones'
                    value={this.state.value} onKeyDown={this.keyPress}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        findMovWord:state.findMovWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findPokemon: (findPokemon) => dispatch(actionTypes.findPokemon(findPokemon))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Busqueda);