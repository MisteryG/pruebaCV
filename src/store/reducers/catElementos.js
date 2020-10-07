import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    findMovWord:'',
    favoritePokemon : [],
    favoritePokemon: localStorage.getItem("pokedex") !== null ? JSON.parse(localStorage.getItem("pokedex")) : [],
    pokemon: {}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_POKEMON:
            return {
                ...state,
                pokemon:action.data.data
            }
        case actionTypes.CLEAR_POKEMON:
            return {
                ...state,
                pokemon:{}
            }
        case actionTypes.ADD_POKEMON:
            localStorage.clear();
            localStorage.setItem("pokedex", JSON.stringify(action.value))
            return {
                ...state,
                favoritePokemon:action.value
            }
        default:
            return state
    }
}

export default reducer;