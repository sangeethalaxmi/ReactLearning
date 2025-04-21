import { useContext } from "react";
import { CDNURL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestroCards = (props) => {
  const { resData } = props;
  const { loggedUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;
  console.log(resData?.info);
  return (
    <div className="m-2 p-4 w-56 hover:border border-solid min-h-full rounded-md  overflow-hidden bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo h-40 w-full rounded-lg"
        src={CDNURL + cloudinaryImageId}
      ></img>
      <h3 className="font-semibold py-2 text-lg">{name}</h3>
      <h5 className="overflow-x-hidden text-ellipsis">{cuisines.join(",")}</h5>
      <div className="res-card-footer">
        <h6>{avgRatingString}</h6>
        <h6>{sla?.slaString}</h6>
        <h6>{costForTwo} </h6>
        <h3>User:{loggedUser}</h3>
      </div>
    </div>
  );
};
// HOC
// component that takes another component as input and returns the component that add more feature to it
export const withExcellentRating = (RestroCards) => {
  //return a component with exhanced version
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white rounded-sm m-2">
          Suggested
        </div>
        <RestroCards {...props} />
      </div>
    );
  };
};
export default RestroCards;
