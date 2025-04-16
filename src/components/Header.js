// named export import
import { useEffect, useState } from "react";
import { LOGOURL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleTextChange = () => {
    setIsLoggedIn((prev) => !prev);
  };

  useEffect(() => {
    console.log(
      "useEffect without dependency calls on every re-render of component"
    );
  });
  useEffect(() => {
    console.log(
      "useEffect with dependency array empty calls on first rendre of component alone"
    );
  }, []);
  useEffect(() => {
    console.log(
      "useEffect with depdency array calls when there is change in dependency"
    );
  }, [isLoggedIn]);

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
          <button className="login" onClick={handleTextChange}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

// default export
export default Header;
