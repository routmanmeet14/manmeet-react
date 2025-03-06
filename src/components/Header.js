import appLogo from "../../images/appLogo.png";
import { useState } from "react";



const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")            
          }} className="btnName">{ btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
