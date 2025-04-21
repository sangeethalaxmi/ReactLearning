import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null || !resInfo?.cards) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  if (resInfo?.length === 0) {
    return <Shimmer />;
  }
  const categoryItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (allcards) => {
        return (
          allcards?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className=" w-4/5 mx-auto">
      <h1 className="font-bold text-2xl  p-4 m-2">{name}</h1>

      <div className="rounded-b-xl p-1.5 bg-gradient-to-t from-gray-300 to-white">
        <div className="bg-white rounded-xl p-4 m-2 border border-solid mt-4 flex flex-col gap-2">
          <p className="font-bold">
            {avgRating}({totalRatingsString}) - {costForTwoMessage}
          </p>
          <p className="underline text-orange-600 font-bold text-sm">
            {cuisines.join(", ")}
          </p>
          <div className="flex items-center gap-4">
            <div>
              <div className="border border-solid mx-auto rounded-md p-1 bg-gray-500 h-0"></div>
              <div className="border border-solid h-[20px] w-0 mx-auto"></div>
              <div className="border border-solid mx-auto rounded-md p-1 bg-gray-500 h-0"></div>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span>OutLet</span> <span>{areaName}</span>
              </p>
              <p className="text-xs font-bold lowercase">{sla?.slaString}</p>
            </div>
          </div>
        </div>
      </div>

      {/* recomended */}
      {/* {itemCards &&
        itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-Rs {item.card.info.price / 100}
            </li>
          );
        })} */}
      {/* build cateogires accroain */}
      {categoryItems.map((category, index) => {
        return (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setshowIndex={() =>
              showIndex != index ? setShowIndex(index) : setShowIndex(null)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
