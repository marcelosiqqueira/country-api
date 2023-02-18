import './pages/home/style.css'

function Header(){
    return(
        <header>
            <span className='headerText'>Where in the World?</span>
            <div className='darkMode'>
            <button id='buttonDarkMode'>
                <img src="moon.svg" alt="iconMoon"/>
                <span>Dark Mode</span>
            </button>     
            </div>
        </header>
    )
}

export default Header;