function Filter(props:any){
    return(
         <div id='divFilter' className={props.bgColor}>
          <select id="filterSelect" onChange={props.currentSelect} value={props.selectedValue} className={props.bgColor}>
            <option value="Todas as regiões">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    )
}

export default Filter;