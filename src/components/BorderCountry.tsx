import { Link } from "react-router-dom";

function BorderCountry(props:any){
    console.log(props.currentCountry)
    return(
        <Link state={ {currentCountry: props.currentCountry, countries: props.countries} } to={`/CountryInfo/:${props.currentBorderName}`}>
            <div>
                <button id="borderCountryButton">
                    <span>{props.currentBorderName}</span>
                </button>
            </div>
        </Link>
    )
}

export default BorderCountry;
