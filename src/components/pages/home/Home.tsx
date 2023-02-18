import { useState, useEffect } from 'react'

import './style.css'
import Country from '../../Country'
import Filter from '../../Filter'
import Search from '../../Search'
import Header from '../../Header'

type CountryType = {
  flag: string,
  name: string,
  population: Number,
  region: string,
  capital: string
}


function Home() {
  const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags';
  const [countries, setCountries] = useState<CountryType[]>([])


  useEffect(() => {
    getAllCountries()
  }, []) 

  async function getAllCountries():Promise<void>{
    const countryList = new Array<CountryType>();
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((obj:any) => {
      const country:CountryType = {
        flag: obj.flags[0],
        name: obj.name.common,
        population: obj.population,
        region: obj.region,
        capital: obj.capital
      }
      countryList.push(country);
    });
    setCountries(countryList);
  }

  return (
    <div className='container'>
      <Header></Header>

      <div className='miniHeader'>
        <Search></Search>
        <Filter></Filter>
      </div>

      <div className='countries'> 
        <Country currentCountry={countries[0] ? countries[0] : 'a'}/>
        <Country currentCountry={countries[1] ? countries[1] : 'a'}/>
        <Country currentCountry={countries[2] ? countries[2] : 'a'}/>
        <Country currentCountry={countries[3] ? countries[3] : 'a'}/>
        <Country currentCountry={countries[4] ? countries[4] : 'a'}/>
        <Country currentCountry={countries[5] ? countries[5] : 'a'}/>
        <Country currentCountry={countries[6] ? countries[6] : 'a'}/>
        <Country currentCountry={countries[7] ? countries[7] : 'a'}/>
        <Country currentCountry={countries[8] ? countries[8] : 'a'}/>
        <Country currentCountry={countries[9] ? countries[9] : 'a'}/>
      </div>
    </div>
  )
}

export default Home