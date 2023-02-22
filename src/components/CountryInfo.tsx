import Header from "./Header";


function CountryInfo(props:any){
    return(
        <div className="container">
            <Header></Header>
            <div className="children">
                <button>Back</button>
                <div className="imgWithDescription">
                    <div className="divImg">
                        <img src="" alt="image" />
                    </div>

                    <div className="countryDescription">

                    </div>
                </div>
            </div>
        </div>   
    )
}


export default CountryInfo;