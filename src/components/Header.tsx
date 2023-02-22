import ThemeSwitch from './ThemeSwitch';

function Header(props:any){
    return(
        <header className={props.bgColor}>
            <span id='headerText'>Where in the World?</span>
            <ThemeSwitch/>        
        </header>
    )
}

export default Header;