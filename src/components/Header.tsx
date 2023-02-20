import DarkMode from './DarkMode';
import './pages/home/style.css'

function Header(props:any){
    return(
        <header className={props.bgColor}>
            <span id='headerText' className={props.bgTextColor} >Where in the World?</span>
            <DarkMode 
                buttonValue={props.buttonValue}
                bgTextColor={props.bgTextColor}
            >        
            </DarkMode>
        </header>
    )
}

export default Header;