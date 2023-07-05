import React from "react"
import {Link} from 'react-router-dom'

export default function Main(props){
    const country = Object.values(props.name.official).join('')
    return(
            <div className = 'countries'>
                <Link to={`/${country}`}><img src={props.flags.svg} className="flag" width="255" height="153" alt="" /></Link>
                <div className="padding">
                    <h2>{props.name.common}</h2>
                    <p>Population: <span className="light_text">{props.population.toLocaleString()}</span></p>
                    <p>Region: <span className="light_text">{props.region}</span></p>
                    <p>Capital: <span className="light_text">{props.capital}</span></p>
                </div>
            </div>
        
    )
}