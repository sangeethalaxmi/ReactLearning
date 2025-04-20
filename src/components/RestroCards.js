import { CDNURL } from "../utils/constants";

const RestroCards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;
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
        <h6>${costForTwo} </h6>
      </div>
    </div>
  );
};
export default RestroCards;
