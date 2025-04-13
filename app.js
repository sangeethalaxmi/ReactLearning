// importing the react from node modules to app.js .. this will throw a error..> Browser scripts cannot have imports or exports.

import React from "react";
import ReactDOM from "react-dom/client";
// it is core thing in react and no need react dom
//{}--> give attributes to tag..we can add custom defined also
const h1 = React.createElement(
  "h1",
  { className: "heading", abc: "this is react app", key: "tet" },
  "Hello world i am sangeetha"
);
console.log(h1); //this is object .. it create a object with props passed to it

//create need root to do all manuplation..when we ned to h1 into root ..we need to create root
// everything will render in the root
// we make div with id root as root element for react to work with it
// react only works with elements inside root and all other html elements outside or root remains unchanged
// this is reason why react is library not framework
const root = ReactDOM.createRoot(document.getElementById("root"));

const h2 = React.createElement("h2", {}, "Hello react app");
// render .. it convert h1 object to tags and render to roto

// nested structure
// ReactElement(object) ==> HTML (browser understands)
/**
 * <div id = 'parent'>
 *  <div id = 'child'>
 *       <h1>
 *      </h1>
 * </div>
 * </div>
 */
const nestedDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am hi tag")
  )
);
// create silbing in react -- array of children
/**
 * <div id = 'parent'>
 *  <div id = 'child'>
 *       <h1> </h1>
 *          <h2></h2>
 * </div>
 * </div>
 */
const nestedDivsilbing = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am hi tag"),
    React.createElement("h2", {}, "I am h2 tag(nested child)"),
  ])
);
console.log(nestedDivsilbing);
// nested structure
const nestedDoublediv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am hi tag"),
    React.createElement("h2", {}, "I am h2 tag(nested child)"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child 2 h1 tag"),
    React.createElement("h2", {}, "I am child 2 h2 tag"),
  ]),
]);
// above code is very ugly and to overcome this we use jsx
// manuplating dom elements with react
root.render([h1]); // to render multiple tags we use render with array
