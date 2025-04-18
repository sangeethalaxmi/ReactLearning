import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
