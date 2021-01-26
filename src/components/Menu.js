import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.scss";

const Menu = ({isActives, menuClick}) => {

    let isActive = isActives ? "menu-active" : "";

    const targetClick = (e) => {
        if(e.target.classList.contains("menu")){
            menuClick()
        }
    }

    return (
        <div onClick={targetClick} className={`menu ${isActive}`}>
            <div className="menu-close" onClick={menuClick}>
                <Close/>
            </div>
            <div className="menu-wrapper">
                <Link className="menu-link" to="/">Existing Inventory</Link>
                <Link className="menu-link" to="/">Used Inventory</Link>
                <Link className="menu-link" to="/">Trade-In</Link>
                <Link className="menu-link" to="/">Cybertruck</Link>
                <Link className="menu-link" to="/">Roadster</Link>
                <Link className="menu-link" to="/">Charging</Link>
                <Link className="menu-link" to="/">Powerwall</Link>
                <Link className="menu-link" to="/">Commercial Solar</Link>
                <Link className="menu-link" to="/">Test Drive</Link>
                <Link className="menu-link" to="/">Support</Link>
                <Link className="menu-link" to="/">United States</Link>
            </div>
        </div>
    )
}

export default Menu
