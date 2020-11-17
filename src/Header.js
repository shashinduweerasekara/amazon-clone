import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="img/logo.png" alt="logo" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
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

        <Link to="/checkout">
          <div className="header-optionCart">
            <ShoppingCartIcon />
            <span className="header-optionLineTwo header-cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
