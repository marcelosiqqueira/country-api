import { useEffect, useState } from "react";
// import style from '../../src/styles/whiteTheme.css'


export default function ThemeSwitch(props: any){
    const [theme, setTheme] = useState('../../src/styles/whiteTheme.css')

    useEffect( () => {
        const head = document.head;
        let link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;

        head.appendChild(link);
        return () => { head.removeChild(link); }
    },[theme])

    function handleThemeChange(){
        switch(theme){
            case '../../src/styles/whiteTheme.css':
                setTheme('../../src/styles/blackTheme.css')
            break

            case '../../src/styles/blackTheme.css':
                setTheme('../../src/styles/whiteTheme.css')
            break
        }
        console.log(theme)
    }
    

    return(
    <div className='darkMode'>
        <button id='buttonDarkMode' onClick={handleThemeChange}>
            <img src="moon.svg" alt="iconMoon"/>
            <span className={props.bgTextColor}>Dark Mode</span>
        </button>     
    </div>
    )

}