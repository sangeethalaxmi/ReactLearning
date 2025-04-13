// importing the react from node modules to app.js .. this will throw a error..> Browser scripts cannot have imports or exports.

import React from "react";
import ReactDOM from "react-dom/client";

//core syntax of react
// const h1 = React.createElement("h1", {}, "Hi this is react");
// console.log(h1);
// JSX ==> react.createElemnet(through babel inside parcel) =>react object => HTML element(render do this)
const jsxh1 = <h1 className="test">Hi this is react</h1>;
// functional components -> a function reutrns a jsx or react element then it is called functional component
const HeadingComponent = () => {
  return <h2>namesta react app</h2>;
};
//component compositition --> we are composing the one component to another component
const Header = () => (
  <div>
    <h1>namesta react app1</h1>
    <HeadingComponent />
  </div>
);
let number = 1000;
const title = <h4>Hi this is title of element</h4>;
const Component2 = () => {
  return (
    <div>
      <h2>component 2 {number + 200}</h2>
      <h3>{console.log("test")}</h3>
      <div>{title}</div>
      <Component3 />
      {/* can we call function inside component - yes */}
      {Component3()}
    </div>
  );
};
const Component3 = () => <h3>component 3</h3>;
//both of above code are same
// both above console is same
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);
