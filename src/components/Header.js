// named export import
import { useEffect, useState } from "react";
import { LOGOURL } from "../utils/constants";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleTextChange = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const onlineStatus = useNetworkStatus();

  // useEffect(() => {
  //   console.log(
  //     "useEffect without dependency calls on every re-render of component"
  //   );
  // });
  // useEffect(() => {
  //   console.log(
  //     "useEffect with dependency array empty calls on first rendre of component alone"
  //   );
  // }, []);
  // useEffect(() => {
  //   console.log(
  //     "useEffect with depdency array calls when there is change in dependency"
  //   );
  // }, [isLoggedIn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGOURL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "online" : "offline"}</li>

          <li>
            {/* we use link which is similr to <a href> to navigate to the pages without page reload */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
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
