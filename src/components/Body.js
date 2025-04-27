import resObj from "../utils/mockData";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { Restro } from "./Restro";
import { useState, useEffect, useContext } from "react";

// it is callback function
const Body = () => {
  // useState hook used for managing the state or data change in react component and re-render component once it see change in state
  // it returns updated state and uses function to set a trigger such that react knows the listRestorent state variable is changed and trigger re-render through
  // diffing and reconcillation
  // destrucing
  const [listRestorent, setListRestorent] = useState([]);
  const [filteredRestro, setFilterRestro] = useState([]);
  // when we need to call any operation after the component is rendered we can use useEffect
  //initally the component with Ui is rendered first and then the useEffect is called

  // const arr = useState(resObj);
  // console.log(arr[0]);
  // console.log(arr[1]);
  const [searchText, setSearchText] = useState("");
  const { loggedUser, setUser } = useContext(UserContext);
  const handleFilter = () => {
    let filteredData = listRestorent.filter(
      (restro) => restro.info?.avgRating > 4.3
    );
    setFilterRestro(filteredData);
  };
  // it is similar to settimeout which is asycn i.e ueseEffect is called after component ui rendered and commit phase is over in react
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      // we need to render the component again with list of data .. can be done with setListRestroent

      let data2 = response?.data.cards.find((data) => {
        // console.log(data.card?.card?.id);
        return data.card?.card?.id == "restaurant_grid_listing_v2";
      });
      setListRestorent(
        data2.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (resdata) => {
            return resdata;
          }
        )
      );

      setFilterRestro(
        data2.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (resdata) => {
            return resdata;
          }
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (!searchText) return false;

    setFilterRestro(
      listRestorent.filter((data) => {
        if (data?.info?.name.toLowerCase().includes(searchText.toLowerCase())) {
          return data;
        }
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useNetworkStatus();
  if (!onlineStatus) {
    return <div>Please check the internet</div>;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-2 pl-2">
          <input
            name="search"
            className="border border-solid "
            type="text"
            data-testid="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="m-4 py-2 px-2 bg-purple-400 text-white rounded-lg"
            onClick={handleSearch}
          >
            {" "}
            search
          </button>
        </div>
        <div className="m-2 pl-2">
          <button
            className="m-4 py-2 px-2 bg-gray-200 text-black rounded-lg "
            onClick={handleFilter}
          >
            top rated restorent
          </button>
          <input
            name="search"
            className="border border-solid "
            type="text"
            value={loggedUser}
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
      </div>
      <Restro listRestorent={filteredRestro} />
    </div>
  );
};
export default Body;
