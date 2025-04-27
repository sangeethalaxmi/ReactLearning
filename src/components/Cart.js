import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return (
    <div className="p-4 m-4 w-3/4 m-auto">
      <h1 className="font-bold text-lg text-center">cart</h1>
      {items.length > 0 ? (
        <>
          <button
            className="p-2  bg-black text-white m-auto rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className=" m-auto">
            <ItemList items={items} />
          </div>
        </>
      ) : (
        <p className="text-center">Add Items to cart</p>
      )}
    </div>
  );
};
export default Cart;
