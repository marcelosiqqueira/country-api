import { Link } from "react-router-dom"

function Country(props:any){
    return(
        <button id='country' onClick={props.onclick}>
            <Link state={ {currentCountry: props.currentCountry, countries: props.countries} } to={`/CountryInfo/:${props.currentCountry.name}`}>
                
                <img id='countryImg' src={props.currentCountry.flags[1]} alt="image-country"/>
                
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
            </Link>
        </button>
    )
}
export default Country