// named export import
import { LOGOURL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGOURL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

// default export
export default Header;
