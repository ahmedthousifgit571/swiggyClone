import RestoCard from "./RestoCard";
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value=""
        />
        <button className="btn">search</button>
      </div>

      <div className="restoList">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </>
  );
};

export default Body;
