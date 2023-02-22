import { Link } from "react-router-dom"

function Navbar(props:any){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/countryinfo">CountryInfo</Link>
        </nav>
    )
};

export default Navbar;