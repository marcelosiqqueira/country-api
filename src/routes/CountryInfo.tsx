import Header from "../components/Header";
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import BorderCountry from "../components/BorderCountry";
import "../styles/countryinfo.css"

type CountryType = {
    flag: string,
    name: string,
    population: Number,
    region: string,
    capital: string[],
    currencies: string[],
    topLevelDomain: string[],
    languages: {}, //objects
    subregion: string,
    borders: string[],
    nativeName: string[],
    cca2: string,
    ccn3: string,
    cca3: string
}

function CountryInfo(props:any){
    const location = useLocation();   
    function getCurrentBorderName(currentBorder:string): string | undefined{
        let name = '';
        location.state.countries.forEach( (country:any) => {
            if(country.cca2 === currentBorder)
            {
                name = country.name;
            }
            if(country.ccn3 === currentBorder){
                name = country.name;
            }

            if(country.cca3 === currentBorder){
                name = country.name;
            } 
        })
        return name;
    }

    function getCountryByBorderName(currentBorder:string){
        for(let i = 0; i<location.state.countries.length; i++){
            if(location.state.countries[i].cca2 === currentBorder){
                return location.state.countries[i];
            }
            if(location.state.countries[i].ccn3 === currentBorder){
                return location.state.countries[i];
            }
            if(location.state.countries[i].cca3 === currentBorder){
                return location.state.countries[i];
            }
        }
    }

    return(
        <div className="container">
            <Header></Header>
            <div className="children">
                <Link to="../">
                    <button id="backButton">
                        <img src="/arrowback.svg" alt="arrowBack" />
                        <span className="textColor">Back</span>
                    </button>
                </Link>
                
                <div className="imgWithDescription">
                    <img id="bigImg" src={location.state.currentCountry.flags[0]} alt="image" />
                    <div className="countryDescription">
                        <span id="countryTitle" className="textTitleCountry textColor">{location.state.currentCountry.name}</span>
                        <div id="completeDescription">
                            <div className="collumnOne">
                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Native Name: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.nativeName[0]}</span>  
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Population: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.population}</span>
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Region: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.region}</span>  
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Sub Region: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.subregion}</span>  
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Capital: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.capital}</span>  
                                </div>
                            </div> 

                            <div className="collumnTwo">
                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Top Level Domain: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.topLevelDomain[0]}</span>  
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Currencies: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.currencies}</span>  
                                </div>

                                <div>
                                    <span className="textDescriptionCountryTwo textColor">Languages: </span>  
                                    <span className="textColor textLowWeight">{location.state.currentCountry.languages}</span>  
                                </div>
                            </div>
                        </div>
                        <div className="titleWithBorderCountries">
                            <span className="textColor titleBorderCountry">Border Countries: </span> 
                            <div id="borderCountries" className="textDescriptionCountryTwo textColor">
                                
                                    <React.Fragment>                                                                 
                                        {location.state.currentCountry.borders.map( (border:string, index:number) => (                                       
                                            <BorderCountry
                                                key = {index}
                                                currentBorderName = {getCurrentBorderName(border)}
                                                currentCountry = {getCountryByBorderName(border)}
                                                countries = {location.state.countries}
                                            />
                                        ))}                                                             
                                    </React.Fragment>                                 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default CountryInfo;