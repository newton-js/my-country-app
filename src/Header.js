import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react"
const root = document.querySelector('body')
const Header = () => {
  const [ theme, setTheme ] = useState('Dark')

  const elementRef = useRef(null)
  
  console.log(getComputedStyle(root).backgroundColor)
  
  const handleMode = () => {
    if(theme === 'Light') setTheme('Dark')
    else setTheme('Light')

    if(getComputedStyle(root).backgroundColor === 'rgb(32, 44, 55)') {
    document.documentElement.style.setProperty('--bg-color', '#fff')
    document.documentElement.style.setProperty('--dark-blue', '#fff')
    document.documentElement.style.setProperty('--white', '#000')

    } else if(getComputedStyle(root).backgroundColor === 'rgb(255, 255, 255)'){ 
      document.documentElement.style.setProperty('--bg-color', 'rgb(32,44,55)')
      document.documentElement.style.setProperty('--dark-blue', 'hsl(209, 23%, 22%)')
      document.documentElement.style.setProperty('--white', '#fff')
    }

  }

  return (
    <div className="header" ref={elementRef}> 
      <Link to={"/"}>
        <h2>Where in the world ?</h2>
      </Link>
      <div onClick={handleMode} className='header__mode'>
        <HiMoon />
        <p>{theme}</p>
      </div>
    </div>
  );
};

export default Header;
