import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //   const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    //   setShowItem((prev) => !prev);
    setshowIndex();
  };
  const { title, itemCards } = props.data;
  const { showItem, setshowIndex } = props;
  return (
    <div className="p-2 my-4 mx-auto bg-gray-100 shadow-lg  rounded-sm ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards?.length})
        </span>
        <span>{showItem ? `🔼` : `🔽`} </span>
      </div>

      {showItem && <ItemList items={itemCards} />}

      {/* accorian header */}
      {/* accordain body */}
    </div>
  );
};
export default RestaurantCategory;
