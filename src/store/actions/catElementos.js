import * as actionTypes from './actionTypes.js'
import axios from 'axios'

export const loadPokemon = (data) => {
    return {
        type:actionTypes.FIND_POKEMON,
        data
    }
}

export const errorConsult = (error) => {
    return {
        type:actionTypes.ERROR_CONSULTA,
        error
    }
}

export const addPokemon = (value) => {
    return {
        type:actionTypes.ADD_POKEMON,
        value
    }
}

export const clearPokemon = () => {
    return {
        type:actionTypes.CLEAR_POKEMON
    }
}

export const findPokemon = (findPokemon) => {
    return (dispatch) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/'+findPokemon)
            .then (response=>{
                dispatch(loadPokemon(response))
            })
            .catch (error=>{
                dispatch(errorConsult(error))
            })
    }
}