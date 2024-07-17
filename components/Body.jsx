import RestaurantCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

// filter function
function filterdata(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants,setallRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //to store all the restaurants value in this state
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

    // console.log(json.data.cards);
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

  // conditional rendering
  return filteredRestaurants.length === 0 ? (
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
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
