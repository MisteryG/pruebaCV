import * as actionTypes from './actionTypes.js'
import axios from 'axios'

export const loadElements = (groups) => {
    return {
        type:actionTypes.INIT_CAT,
        groups
    }
}

export const errorConsult = (error) => {
    return {
        type:actionTypes.ERROR_CONSULTA,
        error
    }
}

export const getConsult = () => {
    return (dispatch) => {
        axios.get ('https://mfwkweb-api.clarovideo.net//services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52')
            .then (response=>{
                dispatch(loadElements(response.data.response.groups))
            })
            .catch (error=>{
                dispatch(errorConsult(error))
            })
    }
}