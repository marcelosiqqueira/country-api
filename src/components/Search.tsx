import './pages/home/style.css'

function Search(props:any){
    return(
        <div id='divSearch' className={props.bgColor} placeholder={props.bgTextColor}>
          <button id='buttonSearch'>
            <img src="search.svg" alt="search"/>
          </button>
          <input 
            type="text"
            // style={props.bgTextColor}
            id='inputTextSearch'
            placeholder='Search for a country...' 
          />
        </div>
    )
}

export default Search;