import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img
              height="40"
              width="60"
              src="https://miro.medium.com/v2/resize:fit:1024/1*Fip-nQEj6xWBTylkp_SMSg.png"
              alt="logo"
            />
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
