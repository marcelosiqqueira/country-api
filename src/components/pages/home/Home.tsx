import './style.css'
import Country from '../../Country'

function Home() {
  return (
    <div className='container'>

      <header>
        <span className='headerText'>Where in the World?</span>
        <div className='darkMode'>
          <button id='buttonDarkMode'>
            <img src="moon.svg" alt="iconMoon"/>
            <span>Dark Mode</span>
          </button>     
        </div>
      </header>

      <div className='miniHeader'>
        <div className='divSearch'>
          <button id='buttonSearch'>
            <img src="search.svg" alt="search"/>
          </button>
          <input type="text" id='inputTextSearch' placeholder='Search for a country...'/>
        </div>

        <div className='divFilter'>
          <select id="filterSelect">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className='countries'>
        <Country></Country>
        <Country></Country>
        

      </div>
    </div>
  )
}

export default Home