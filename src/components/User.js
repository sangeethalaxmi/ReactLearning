import { useEffect, useState } from "react";
const User = (props) => {
  const { name, location, username } = props;
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hi this is sangeetha");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="res-card">
      <h2>Name: {name}</h2>
      <h3>Location:{location}</h3>
      <h3>username:{username}</h3>
      <h2>{count}</h2>
      <h2>{countTwo}</h2>
    </div>
  );
};
export default User;
