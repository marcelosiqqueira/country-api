import './pages/home/style.css'

function Search(){
    return(
        <div className='divSearch'>
          <button id='buttonSearch'>
            <img src="search.svg" alt="search"/>
          </button>
          <input type="text" id='inputTextSearch' placeholder='Search for a country...'/>
        </div>
    )
}

export default Search;