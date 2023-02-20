import './pages/home/style.css'

function DarkMode(props:any){
    return(
    <div className='darkMode'>
        <button id='buttonDarkMode' onClick={props.buttonValue}>
            <img src="moon.svg" alt="iconMoon"/>
            <span className={props.bgTextColor}>Dark Mode</span>
        </button>     
    </div>
    )
}

export default DarkMode;