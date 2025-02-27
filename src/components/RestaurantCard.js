import CDN_url from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div>
      <div className="res-card">
        <img className="res-logo" src={CDN_url + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
