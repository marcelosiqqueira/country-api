function Country(props:any){
    return(
        <div id='country' className={props.bgColor}>
            <div id='countryImg' >
                <img src={props.currentCountry.flag} alt="image-country"/>
            </div>
            <div id='countryDescription'>
                <div id='countryName'> <strong>{props.currentCountry.name}</strong></div>
                <span id='population'>
                    <strong>Population: </strong>
                    <span id='populationNumber'>{props.currentCountry.population}</span> 
                </span>
                <span id='region'>
                    <strong>Region: </strong>
                    <span id='regionName'>{props.currentCountry.region}</span>
                </span>
                <span id='capital'>
                    <strong>Capital: </strong>
                    <span id='capitalName'>{props.currentCountry.capital}</span>
                </span>
            </div>
        </div>
    )
}

export default Country