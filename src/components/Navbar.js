import React, {createContext, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {RiComputerLine} from 'react-icons/ri'
import './Navbar.css'
import {Button} from './Button';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false);

    const [theme, setTheme] = useState('light');

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true)
        }
    }

    // useEffect(() => {
    //     showButton();
    //     window.addEventListener('resize', showButton);
    //     return {
    //         window.removeEventListener('resize', showButton)
    //     }
    // }, [])

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
      };

  return (
    <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <nav className="navbar" id={theme}>
            <div className="navbar-container container">
                <Link to='/' className="navbar-name" onClick={closeMobile}>
                    <RiComputerLine className="navbar-icon" />
                    Tech-World
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/products' className="nav-links" onClick={closeMobile}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobile}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobile}>
                            Contact
                        </Link>
                    </li>
                  
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary'>SIGN IN</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobile}>
                                SIGN IN
                                </Button>
                            </Link>
                        )}
                    </li>

                    <li className="switch">
                        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                    </li>
                </ul> 
            </div>
        </nav>
        </ThemeContext.Provider>
    </>
  )
}

export default Navbar