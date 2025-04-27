// named export import
import { useContext, useEffect, useState } from "react";
import { LOGOURL } from "../utils/constants";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleTextChange = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const onlineStatus = useNetworkStatus();
  // access the created usercontext and its data-->we can access it in all areas
  const { loggedUser } = useContext(UserContext);
  // we subscribe to the store through selector and get the data required
  // important note --> when subscribing to store subscribte to exact data needed from cart..
  //if we dont subscribe to correct data in state it will be big performance issue

  const cartItems = useSelector((state) => state.cart.items);
  // performance issue code -- bothe above code and below is same but we dont want to subscribe to whole store
  //  when there is change to some other data in store
  //  const data = useSelector((state)=>state);
  //  const items = data.cart.items;
  // console.log(cartItems);

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
    <div className="flex justify-between shadow-lg mb-2 bg-pink-100 items-center sm:bg-green-200">
      <div className="logo-container">
        <img className="logo w-32" src={LOGOURL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">{onlineStatus ? "online" : "offline"}</li>

          <li className="px-4">
            {/* we use link which is similr to <a href> to navigate to the pages without page reload */}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold text-lg">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <button className="login" onClick={handleTextChange}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li>Logged user : {loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

// default export
export default Header;
