import resObj from "../utils/mockData";
import { Restro } from "./Restro";
import { useState } from "react";

// it is callback function
const handleFilter = () => {};
const Body = () => {
  // useState hook used for managing the state or data change in react component and re-render component once it see change in state
  // it returns updated state and uses function to set a trigger such that react knows the listRestorent state variable is changed and trigger re-render through
  // diffing and reconcillation
  // destrucing
  const [listRestorent, setListRestorent] = useState(resObj);
  // const arr = useState(resObj);
  // console.log(arr[0]);
  // console.log(arr[1]);
  const handleFilter = () => {
    let filteredData = listRestorent.filter(
      (restro) => restro.info?.avgRating > 4.3
    );
    setListRestorent(filteredData);
  };
  console.log("buttotn clicked");
  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <button className="filter" onClick={handleFilter}>
        top rated restorent
      </button>
      <Restro listRestorent={listRestorent} />
    </div>
  );
};
export default Body;
