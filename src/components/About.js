import User from "./User";
import React from "react";

import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent construtor");
  }
  componentDidMount() {
    // first consturctor then render is called and after component is rendered the componentdidmount is called
    console.log("parent didmount");
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About class component</h1>

        {/* <UserClass
          name="sangeetha(class)"
          location="pollachi"
          username="sangeethalaxmo"
        /> */}
        <User
          name="sangeetha(class)"
          location="pollachi"
          username="sangeethalaxmo"
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>

//       <UserClass
//         name="sangeetha(class)"
//         location="pollachi"
//         username="sangeethalaxmo"
//       />
//     </div>
//   );
// };
export default About;
