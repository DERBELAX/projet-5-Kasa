import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/LOGO.png'
import "../style/Header.scss";

 
function Header() {
    return (
        <div className='header'>
        <img src={Logo} alt='Logo Kasa' className='logo'/>
        <nav className='nav-header'>
            <ul >
                <li >
                <NavLink to="/Home">Accueil</NavLink>
                </li>
                <li><NavLink to="/About">A Propos </NavLink></li>
            </ul>
        </nav>
    </div>
    )
}

export default Header