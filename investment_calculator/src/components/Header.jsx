import React from 'react';
import logo from '../assets/investment-calculator-logo.png';


const Header = ({styles}) => {
    return (
        <header id='header' className={styles.header}>
            <img src={logo} alt='Logo showing a money bag'/>
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default Header;
