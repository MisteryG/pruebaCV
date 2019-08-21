import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    findMovWord:'',
    groups : []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_CAT:
            return {
                ...state,
                groups:action.groups
            }
        case actionTypes.FIND_MOV:
            return {
                ...state,
                findMovWord:action.findMovWord
            }
        default:
            return state
    }
}

export default reducer;