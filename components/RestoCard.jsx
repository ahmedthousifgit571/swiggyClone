import RestoList from "./RestoList";
const RestoCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant.info?.cloudinaryImageId
        }
      />
      <h2>{restaurant.info?.name}</h2>
      <h3>{restaurant.info?.cuisines.join(", ")}</h3>
      <h4>{restaurant.info?.avgRating} stars</h4>
    </div>
  );
};
export default RestoCard;
