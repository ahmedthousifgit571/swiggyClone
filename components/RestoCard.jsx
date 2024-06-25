import BurgerKing from "./BurgerKing";
const RestoCard = () => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          BurgerKing[0].info?.cloudinaryImageId
        }
      />
      <h2>{BurgerKing[0].info?.name}</h2>
      <h3>{BurgerKing[0].info?.cuisines.join(", ")}</h3>
      <h4>{BurgerKing[0].info?.lastMileTravelString}</h4>
    </div>
  );
};
export default RestoCard;
