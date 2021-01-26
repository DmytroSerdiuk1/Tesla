import React from 'react'
import { Link } from 'react-router-dom';
import "./Navigation.scss";
import logo from '../assets/logo.png'
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = ({menuClick}) => {
    return (
        <nav className="navigation">
            <a href="/">
                <img className="logo" src={logo} alt="Tesla Logo"/>
            </a>
            <div className="navigation-menu">
                <Link to="/" className="navigation__link">Model S</Link>
                <Link to="/" className="navigation__link">Model 3</Link>
                <Link to="/" className="navigation__link">Model X</Link>
                <Link to="/" className="navigation__link">Model Y</Link>
                <Link to="/" className="navigation__link">Solar Roof</Link>
                <Link to="/" className="navigation__link">Solar Panels</Link>
            </div>
            <div className="navigation-right">
                <div className="navigation-right-links">
                    <Link to="/" className="navigation__link">Shop</Link>
                    <Link to="/" className="navigation__link">Tesla Account</Link>
                </div>
                <div onClick={menuClick} className="burger">
                    <MenuIcon/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
