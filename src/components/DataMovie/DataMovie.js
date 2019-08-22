import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './DataMovie.css'
import axios from 'axios'

class DataMovie extends Component {
    state = {
        data:[]
    }

    UNSAFE_componentWillMount() {
        var findMovId='784198'
        axios.get('https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=%20web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS%20=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id='+findMovId)
        .then (response=>{
            this.setState({data: response.data.response.group.common})
        })
        .catch (error=>{
            console.log({data: error})
        })
    }

    render() {
        if (this.state.data.length!==0) {
            var valores = this.state.data.extendedcommon
            var reparto = valores.roles.role.map(data=>
                <div className="reparto" key={data.id}>
                    <p>{data.desc}</p>
                    <div className="talentos">{data.talents.talent.map(name =>
                    <p key={name.id}>{name.fullname}</p>)}</div>
                </div>       
            )
            var generos = valores.genres.genre.map(data=>
                <div className="generos" key={data.id}>
                    <p>{data.desc}</p>
                </div>
            )
        }
        
        console.log(this.state.data)
        // const generos=this.state.data.extendedcommon.genres.genre.forEach((dat)=>
        //     <p>{dat.desc}</p>
        // )
        return (
            <div className="contGen">
                <img className="fondo" src={this.state.data.image_background}/>
                <div className="contenedor">
                    <div className="imgPortada">
                        <img className="portada" src={this.state.data.image_medium}/>
                    </div>
                    <div className="dataMovie">
                        <p>{this.state.data.title}</p>
                        <p>{this.state.data.date}</p>
                        <p>{this.state.data.duration}</p>
                        <p>{this.state.data.large_description}</p>
                        {generos}
                        {reparto}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   groups:state.groups
    }
  }

  export default connect (mapStateToProps)(DataMovie);