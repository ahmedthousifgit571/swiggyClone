import RestaurantCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

// filter function
function filterdata(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]); //to store all the restaurants value in this state
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //to store all the filtered restaurants value in this state
  const [searchText, setSearch] = useState("");

  useEffect(() => {
    getRestaurants(); // API CALL
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // optional chaining
    setallRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }

  console.log("render");

  // early return
  if (!allRestaurants) return null;

  // conditional rendering
  return allRestaurants.length === 0 ? (
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
            const data = filterdata(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurantList">
        {/* the below line is to tell no match when filtering */}
        {filteredRestaurants?.length === 0 ? (
          <h1>filter not found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
