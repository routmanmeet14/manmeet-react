import appLogo from "../../images/appLogo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
