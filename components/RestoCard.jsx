import BurgerKing from "./BurgerKing";
const RestoCard = () => {
  return (
    <div className="card">
      <img src={BurgerKing.image} alt="burger" />
      <h2>{BurgerKing.name}</h2>
      <h3>{BurgerKing.cusines.join(",")}</h3>
      <h3>{BurgerKing.rating} stars</h3>
    </div>
  );
};
export default RestoCard;
