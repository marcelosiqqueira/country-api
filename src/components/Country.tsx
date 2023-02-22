import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Country(props:any){
    return(
        <button id='country' onClick={props.onclick}>
             {/* <Link to={{ pathname: `/countryinfo/${props.currentCountry.name}`, state: props.currentCountry }}>
            {props.currentCountry.name}
          </Link> */}
            <div id='countryImg' >
                <img src={props.currentCountry.flag} alt="image-country"/>
            </div>
            <div id='countryDescription'>
                <div className="textTitleCountry" id='countryName'>{props.currentCountry.name}</div>
                <span id='population'>
                    Population:
                    <span id='populationNumber' className="textDescriptionCountry"> {props.currentCountry.population}</span> 
                </span>
                <span id='region'>
                    Region:
                    <span id='regionName' className="textDescriptionCountry"> {props.currentCountry.region}</span>
                </span>
                <span id='capital'>
                    Capital:
                    <span id='capitalName' className="textDescriptionCountry"> {props.currentCountry.capital}</span>
                </span>
            </div>
        </button>
    )
}

export default Country