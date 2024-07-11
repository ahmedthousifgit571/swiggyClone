import RestoList from "./RestoList";
import RestoCard from "./RestoCard";
import { useState } from "react";

// filter function
function filterdata(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState(RestoList);   //to store all the restaurants value in this state
  const [searchText, setSearch] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          className="btn"
          onClick={() => {
            // need to filter the data
            const data = filterdata(searchText, restaurants);
            // update the state - restaurants
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restoList">
        {restaurants.map((restaurant) => {
          {
            /* The below line is using props that is getting from child component restoCard */
          }
          return <RestoCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
