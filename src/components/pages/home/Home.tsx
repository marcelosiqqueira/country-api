import { useState, useEffect } from 'react'

import '../../../styles/style.css'
import '../../../styles/styleModal.css'
import Country from '../../Country'
import Filter from '../../Filter'
import Search from '../../Search'
import Header from '../../Header'
import CountryModal from '../../CountryModal'
import React from 'react'

type CountryType = {
  flag: string,
  name: string,
  population: Number,
  region: string,
  capital: string
}

type BackgroundColor = {
  lightModeText: boolean,
  lightModeElements: boolean,
  lightModeBackground: boolean,
}



function Home() {
  const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags';
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [region, setRegion] = useState<CountryType[]>([]);
  const [currentCountries, setCurrentCountries] = useState<CountryType[]>([]);
  const [currentTextSearch, setCurrentTextSearch] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState('Todas as regiões');
  const [button, toggleButton] = useState<Boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);


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
      // console.log(region)
    }else{
      const filteredCountries = countries.filter((country) => {
        return country.region === selectedValue;
      });
      setRegion(filteredCountries);
      setCurrentCountries(filteredCountries);
      // console.log(region)
    }
  }

  async function getAllCountries():Promise<void>{
    const countryList = [...countries];

    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((obj:any) => {
      const country:CountryType = {
        flag: obj.flags[0],
        name: obj.name.common,
        population: obj.population.toLocaleString('pt-BR'),
        region: obj.region,
        capital: obj.capital
      }
      countryList.push(country);
    });
    setCountries(countryList);
  }

  function handleScroll(): void {
    const windowHeight = document.documentElement.clientHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const isBottom = scrollTop + windowHeight >= docHeight;
    // console.log('ISBOTTOM> ',isBottom)
    
    if (isBottom) {
      // console.log('valor do page:', page + 'tamanho do countries:', page*20)
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
    setModalOpen(true);
  }

  function handleCloseClick(){
    setModalOpen(false);
  }

  return (
    <div id='container' className={`${button ? 'darkModeBackground' : 'lightModeBackground'}`}>
      {/* {modalOpen ? <CountryModal country={selectedCountry} handleCloseClick={handleCloseClick} /> : null} */}
      <Header 
        buttonValue={handleButtonChange}
        bgColor={`${button ? 'darkModeElements' : ''}`} 
        bgTextColor={`${button ? 'darkModeText' : ''}`}
      />
      <div className='miniHeader'>
        <Search 
          bgColor={`${button ? 'darkModeElements' : 'lightModeElements'}`}
          bgTextColor={`${button ? 'darkModeText' : ''}`}
          handleTextChange = {changeTextState}
        />
        <Filter
          currentSelect={handleSelectChange}
          selectedValue={selectedValue}
          bgColor={`${button ? 'darkModeElements' : 'lightModeElements'}`}
          bgTextColor={`${button ? 'darkModeText' : ''}`}
        />          
      </div>

      <div className='countries'> 
        <React.Fragment>
          {currentCountries.slice(0, (page + 1) * 20).map((country) => (
            <Country 
              currentCountry={country}
              bgColor={`${button ? 'darkModeElements' : 'lightModeElements'}`}
              onclick={() => handleCountryClick(country)}

           />
          ))}
        </React.Fragment>    
      </div>
      
      <div>
        {modalOpen ? 
          <CountryModal 
            country={selectedCountry}
            handleCloseClick={handleCloseClick}
            backgroundModal = {`${button ? 'darkModeBackground' : 'lightModeBackground'}`}
            bgColor={`${button ? 'darkModeElements' : 'lightModeElements'}`}
            bgTextColor={`${button ? 'darkModeText' : ''}`} 
          /> : null}
      </div>
      
    </div>
  )
}

export default Home