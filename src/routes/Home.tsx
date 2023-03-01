import { useState, useEffect } from 'react'
import "../styles/home.css"
import "../styles/colorTheme.css"
import Country from '../components/Country'
import Filter from '../components/Filter'
import Search from '../components/Search'
import Header from '../components/Header'
import React from 'react'


type CountryType = {
  flags: string[],
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

function Home() {
  const URL = 'https://restcountries.com/v3/all?fields=flags,name,currencies,population,tld,region,languages,subregion,capital,borders,cca2,ccn3,cca3';
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [region, setRegion] = useState<CountryType[]>([]);
  const [currentCountries, setCurrentCountries] = useState<CountryType[]>([]);
  const [currentTextSearch, setCurrentTextSearch] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState('Todas as regiões');
  const [button, toggleButton] = useState<Boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [page])

  useEffect(() => {
    getAllCountries();
  },[])

  useEffect(() => {
    getCountriesByRegion();
  },[selectedValue, countries])

  useEffect(() => {
    handleTextChange();
  },[currentTextSearch, region])

  useEffect( () => {
    console.log(selectedCountry)
  },[selectedCountry])

  function getCountriesByRegion(): void{
    if(selectedValue == 'Todas as regiões')
    {
      setRegion(countries);
      setCurrentCountries(countries)
    }else{
      const filteredCountries = countries.filter((country) => {
        return country.region === selectedValue;
      });
      setRegion(filteredCountries);
      setCurrentCountries(filteredCountries);
    }
  }

  function getCountriesCurrencies(country:CountryType): string[]{  
    const currencies = []

    
    for(const [key, value] of Object.entries(country))
    {
        if(key === 'currencies')
        {
            for(const [chave, valor] of Object.entries(value)){
                  currencies.push(valor.name);                
            }
        }
    }
    return currencies;
  } 

  function getCountryLanguages(country:CountryType): string[]{
    const languages: string[] = []
    for(const [key, value] of Object.entries(country)){
      languages.push(value + ' ')
    }
    return languages;
  }

  function getCountryNativeNames(country:CountryType): string[]{
    const nativeNames = []
    for(const [key, value] of Object.entries(country))
    {
        if(key === 'name')
        {
            for(const [chave, valor] of Object.entries(value)){
              if(chave === 'nativeName'){
                for(const [chave2, valor2] of Object.entries<{common:string}>(valor)){   
                  console.log(valor2)         
                  nativeNames.push(valor2.common)
                }
              }   
            }
        }
    }
    return nativeNames;                                     
  }

  async function getAllCountries():Promise<void>{
    const countryList = [...countries];

    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((obj:any) => {
      const country:CountryType = {
        flags: obj.flags,
        name: obj.name.common,
        population: obj.population.toLocaleString('pt-BR'),
        region: obj.region,
        capital: obj.capital[0],
        currencies: getCountriesCurrencies(obj),
        topLevelDomain: obj.tld,
        languages: getCountryLanguages(obj.languages),
        subregion: obj.subregion,
        borders: obj.borders,
        nativeName: getCountryNativeNames(obj),
        cca2: obj.cca2,
        ccn3: obj.ccn3,
        cca3: obj.cca3
      }
      countryList.push(country);
    });
    setCountries(countryList);
  }

  function handleScroll(): void {
    const windowHeight = document.documentElement.clientHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const isBottom = scrollTop + windowHeight >= docHeight - docHeight*0.1;
    
    if (isBottom) {
      setPage(page + 1);
    }
  }

  function handleSelectChange(event:any){
    setSelectedValue(event.target.value);
  };

  function handleButtonChange(event: any){
    if(button === false)
    {
      toggleButton(true)
    }  
    else{
      toggleButton(false)
    }
    console.log(`${button ? 'dark-mode' : ''}`)
  }

  function changeTextState(event: React.ChangeEvent<HTMLInputElement>){
    const currentText = event.target.value;
    setCurrentTextSearch(currentText);
  }

  function handleTextChange()
  {
    if(currentTextSearch !== '')
    {
      const filteredCountries = region.filter((country) => {
        return country.name.toLowerCase().startsWith(currentTextSearch.toLowerCase());
      });
      setCurrentCountries(filteredCountries);
    }else{
      setCurrentCountries(region);
    }
  }

  function handleCountryClick(country: CountryType){
    setSelectedCountry(country);
  }


  return (
    <div id='container'>
      <Header buttonValue = {handleButtonChange} />
      <div className='miniHeader'>
        <Search handleTextChange = {changeTextState} />
        <Filter
          currentSelect = {handleSelectChange}
          selectedValue = {selectedValue}
        />          
      </div>

      <div className='countries'> 
        <React.Fragment>
          {currentCountries.slice(0, (page + 1) * 20).map((country) => (
            <Country 
              key={country.name}
              currentCountry={country}
              countries={countries}
              onclick={() => handleCountryClick(country)}
            />
          ))}
        </React.Fragment>    
      </div>
     
    </div>
  )
}

export default Home