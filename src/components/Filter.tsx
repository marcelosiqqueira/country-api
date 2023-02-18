import './pages/home/style.css'

function Filter(){
    return(
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
    )
}

export default Filter;