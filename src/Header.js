import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../src/Logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="LinkedIn-Logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
