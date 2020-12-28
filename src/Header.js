import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="hedaer__logoContainer">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </div>
      </Link>
      <div className="header__optionAddress">
        <div className="header__option">
          <span className="header__optionLineOne">Hello,</span>
          <span className="header__optionlineTwo">
            <LocationOnIcon className="location__logo" />
            Select your address
          </span>
        </div>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? `Guest` : user?.email}
            </span>
            <span className="header__optionlineTwo">
              {user ? `Sign out` : `Sign In`}
            </span>
          </div>
        </Link>
        
        <Link to="/orders">
        <div onClick={handleAuthentication} className="header__option">
          {/* user?.email */}
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionlineTwo">& Orders</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionlineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLine Two header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
