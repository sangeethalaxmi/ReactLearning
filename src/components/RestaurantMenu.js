import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const fetchRestroData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const response = await data.json();
      console.log(response.data);
      setResInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRestroData();
  }, [resId]);

  if (resInfo === null || !resInfo?.cards) {
    return <Shimmer />;
  }
  console.log(resInfo?.cards);
  const {
    name,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {totalRatingsString} - {costForTwoMessage}
      </h3>
      <h3>{cuisines}</h3>
      <h4>OutLet {areaName}</h4>
      <h5>{sla?.slaString}</h5>

      {itemCards &&
        itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-Rs {item.card.info.price / 100}
            </li>
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
