function Search(props:any){
    return(
        <div id='divSearch' className={props.bgColor}>
          <button id='buttonSearch'>
            <img src="search.svg" alt="search"/>
          </button>
          <input 
            type="text"
            id='inputTextSearch'
            placeholder='Search for a country...'
            className={props.bgTextColor}
          />
        </div>
    )
}

export default Search;