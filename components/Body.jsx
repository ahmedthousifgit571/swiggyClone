import RestoList from "./RestoList";
import RestoCard from "./RestoCard";
import { useState } from "react";
const Body = () => {
  const [searchText, setSearch] = useState("burger king");
  const [val, setVal] = useState("false");
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
        <h1>{val}</h1>
        <button
          className="btn"
          onClick={() => {
            val === "false" ? setVal("true") : setVal("false");
          }}
        >
          search
        </button>
      </div>

      <div className="restoList">
        <RestoCard restaurant={RestoList[0]} />
        <RestoCard restaurant={RestoList[1]} />
        <RestoCard restaurant={RestoList[2]} />
        <RestoCard restaurant={RestoList[3]} />
        <RestoCard restaurant={RestoList[6]} />
        <RestoCard restaurant={RestoList[5]} />
      </div>
    </>
  );
};

export default Body;
