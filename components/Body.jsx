import RestoList from "./RestoList";
import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// filter function
function filterdata(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState([]); //to store all the restaurants value in this state
  const [searchText, setSearch] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
          return <RestoCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
