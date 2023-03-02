import { useEffect, useState } from "react";

import useEffectOnce from "./useEffectOnce";


export default function ThemeSwitch(props: any){
    const [theme, setTheme] = useState(localStorage.getItem("themeLocal") ? localStorage.getItem("themeLocal") : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'white')
    useEffect(() => {
        if (theme === 'white') {
            document.documentElement.style.setProperty('--ColorElement', 'hsl(0, 0%, 100%)')
            document.documentElement.style.setProperty('--ColorBackground', 'hsl(0, 0%, 96%)')
            document.documentElement.style.setProperty('--DarkModeTextAndLightModeElements', 'hsl(0, 0%, 100%)')
            document.documentElement.style.setProperty('--Shadow', '3px 3px 3px rgb(201, 201, 201)')
            document.documentElement.style.setProperty('--ColorText', 'hsl(200, 15%, 8%)')
            document.documentElement.style.setProperty('--Filter', 'initial')                       
        } else {
            if (theme === 'black') {
                document.documentElement.style.setProperty('--ColorElement', 'hsl(209, 23%, 22%)')
                document.documentElement.style.setProperty('--ColorBackground', 'hsl(207, 26%, 17%)')
                document.documentElement.style.setProperty('--DarkModeTextAndLightModeElements', 'hsl(0, 0%, 100%)')
                document.documentElement.style.setProperty('--Shadow', '3px 3px 3px rgb(12, 10, 32)')
                document.documentElement.style.setProperty('--ColorText', 'hsl(0, 0%, 100%)')
                document.documentElement.style.setProperty('--Filter', 'invert(97%) sepia(8%) saturate(74%) hue-rotate(42deg) brightness(116%) contrast(100%)')              
            } else {
                console.log('ERROR THEME SWITCH')
            }
        }         
    }, [theme])

    function handleThemeChange(){

        if(theme === 'white'){
            setTheme('black');
            window.localStorage.setItem('themeLocal', 'black');
        }else{
            if(theme === 'black'){
                setTheme('white');
                window.localStorage.setItem('themeLocal','white'); 
            }
        }
    }

    return(
    <div className='darkMode'>
        <button id='buttonDarkMode' onClick={handleThemeChange}>
            <img src="/moon.svg" alt="iconMoon"/>
            <span className={props.bgTextColor}>Dark Mode</span>
        </button>     
    </div>
    )

}