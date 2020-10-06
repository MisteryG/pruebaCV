import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    findMovWord:'',
    favoritePokemon : [],
    pokemon: {}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_POKEMON:
            return {
                ...state,
                pokemon:action.data.data
            }
        case actionTypes.ADD_POKEMON:
            return {
                ...state,
                favoritePokemon:action.value
            }
        default:
            return state
    }
}

export default reducer;