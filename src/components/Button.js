import React from 'react'
import { createContext, useState } from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile']

const COLOR = ['primary']

export const ThemeContext = createContext(null);

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
      };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
        </ThemeContext.Provider>
    );
};