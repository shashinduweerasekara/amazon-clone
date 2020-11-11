import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className='header'>
            <img
                className="header-logo"
                src="img/logo.png"
            />
            
            <div className="header-search">
                <input className="header-searchInput" type="text"/>
                <SearchIcon className="header-searchIcon"/>
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">Hello</span>
                    <span className="header-optionLineTwo">Sign In</span>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>

                <div className="header-optionCart">
                    <ShoppingCartIcon />
                    <span className="header-optionLineTwo header-cartCount">0</span>
                </div>
            </div>

        </div>
    )
}

export default Header
