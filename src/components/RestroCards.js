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
    <div className="res-card">
      <img className="res-logo" src={CDNURL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <div className="res-card-footer">
        <h6>{avgRatingString}</h6>
        <h6>{sla?.slaString}</h6>
        <h6>${costForTwo} </h6>
      </div>
    </div>
  );
};
export default RestroCards;
