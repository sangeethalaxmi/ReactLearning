import { useDispatch } from "react-redux";
import { CDNURL } from "../utils/constants.js";
import { addItem } from "../utils/cartSlice.js";
const ItemList = ({ items }) => {
  // dispatch a action so the cart slice updated with the data passed
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // addItem action is exported from reducer and used it and pizza is action.payload
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-4 m-2 mb-8  border-gray-400 border-b-2 flex justify-between items-center"
          data-testid="items"
        >
          <div className="w-4/5">
            <div className="flex flex-col font-bold">
              <span>{item.card?.info?.name}</span>
              <span>
                ₹
                {item.card?.info?.price
                  ? item.card?.info?.price / 100
                  : item.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card?.info?.description}</p>
          </div>
          <div className="relative w-1/5 p-4">
            <img
              className="w-[125px] h-28 rounded-xl"
              src={CDNURL + item.card?.info?.imageId}
            />
            <button
              className="absolute px-8 py-2 bg-white font-bold text-green-600 rounded-lg hover:bg-gray-200 top-[85%] left-[10%]"
              onClick={() => {
                // function passed to anonymous function which will be called when we click add button
                handleAddItem(item);
              }}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
