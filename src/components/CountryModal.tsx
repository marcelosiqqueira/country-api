import Header from "./Header"

function CountryModal(props:any){
    return(      
        <div className="modal-overlay">
            <div id="modal" className = {props.backgroundModal} >
                <div className="container">
                    <Header></Header>
                    <button 
                        id="closeButton"
                        onClick={props.handleCloseClick}
                        className={props.bgColor}>
                        <span>Back</span>
                    </button>

                    <div id='countryImg' >
                        <img src={props.country.flag} alt="image-country"/>
                    </div>
                </div>
            <div>
              
            </div>
          </div>
        </div>
      )
}

export default CountryModal