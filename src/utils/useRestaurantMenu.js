// custom hooks are normal js functions
// the logic of geting the data in restramenu is extracted to hook and no need to worry about it
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  //add logic to get restro Information and resturn it
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchRestroData();
  }, []);
  const fetchRestroData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const response = await data.json();
      setResInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};
export default useRestaurantMenu;
