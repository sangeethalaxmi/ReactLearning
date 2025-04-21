// importing the react from node modules to app.js .. this will throw a error..> Browser scripts cannot have imports or exports.

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));
// lazy loading
//code spliting
//chunking
// the component will not be loaded intially when we load the page but it will be loaded when it is required i.e when user go to grocery page
// this one line code has more power.. when we load the page for first time the react bundle will not have grocery and when we move to grocery page
// it create seprate js file for grocery
// when the component is loaded and when it is taking time to load it iwll throw error in ui to solve it we use suspends

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser("Sangeetha Priya");
  }, []);
  return (
    // to update value of userContext theere is context provider throgh which we can send changed value
    <div className="app">
      <UserContext.Provider value={{ loggedUser: user }}>
        <Header />
        {/* outlet is used to load the child elements that are children of appLayout based on url called */}
        {/* // we can also update the context value in other components by sending it as props */}
        <UserContext.Provider value={{ loggedUser: user, setUser }}>
          <Outlet />
        </UserContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading about us</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Grocery />
      </Suspense>
    ),
  },
]);
root.render(<RouterProvider router={appRouter} />);
