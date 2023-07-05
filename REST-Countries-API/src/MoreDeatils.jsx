import { Link, useParams } from "react-router-dom"
import {nanoid} from 'nanoid'

export default function MoreDeatils(props){
    const {moreDeatilsId} = useParams()
    // make object property value an array 
    const values = value => Object.values(value).join('')
    // check if property exist in array
    const checkForProperty = (property) => countries.hasOwnProperty(property)

    const countries = props.countries.find(country => {
        const officialName = values(country.name.official)
       return moreDeatilsId === officialName
    })

    const checkForNativeName = ()=> {
        // checking if nativeName exist or not in object. Ex.Antarctica
        if(countries.name.hasOwnProperty('nativeName')){
            // remove duplicate array of objects property values
        const jsonObject = Object.values(countries.name.nativeName).map(JSON.stringify)
        const uniqueSet = new Set(jsonObject)
        const uniqueArray = [...uniqueSet].map(JSON.parse)

        return uniqueArray.map(name=>name.common).join(', ')
        }else{
            return 'None'
        }
    }
    return(
        <div className="container nextPage_grid selecting">
            <div className="back_button_container selecting">
                <Link to='/' className="back_button" onClick={props.resetInputAndFilter}>Back</Link>
                <div className="flag_img_container">
                    <img src={values(countries.flags.svg)} width="600" height="400"/>
                </div>
            </div>

            <div className="margin_bottom selecting">
                <h2>{values(countries.name.common)}</h2>
                <p>Native Name: <span className="light_text">{checkForNativeName()}
                </span>
                </p>
                
                <p>Population: <span className="light_text">{countries.population.toLocaleString()}</span></p>
                <p>Region: <span className="light_text">{countries.region}</span></p>
                <p>Sub Region: <span className="light_text">{checkForProperty('subregion') ? countries.subregion : 'None'}</span></p>
                <p>Capital: <span className="light_text">{checkForProperty('capital') ? countries.capital : 'None'}</span></p>
            </div>

            <div className="margin_bottom selecting">  
                {/* if the type countries.tld is an array or or object display it, else display it regularly  */}
                <p>Top Level Domain: <span className="light_text">{typeof countries.tld ? countries.tld.join(' ') : countries.tld}</span></p>
                <p>Currencies: <span className="light_text">{
                    checkForProperty('currencies') ? 
                    Object.values(countries.currencies).map(currency=>currency.name) : 
                    'None'
                }
                </span>
                </p>

                <p>Languages: <span className="light_text">{
                    checkForProperty('languages') ? 
                    Object.values(countries.languages).map(lang=>lang).join(', ') : 
                    'None'
                }
                </span>
                </p>
                
            </div>
            {/* if the country has borders than display it, else display none */}
            <div className="border_countries_container selecting">
                <p className="border_countries_title">Border Countries: </p>
                <div className="border_countries_content">{
                        checkForProperty('borders') ? 
                        countries.borders.map(border => <span className="light_text button_padding" key={nanoid()}>{border}</span>) :
                        <span className="light_text button_padding">None</span> 
                    }
                </div>
            </div> 
        </div>
    )
}