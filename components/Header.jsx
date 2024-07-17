import { useState } from "react";
import { Title } from "./Title"; // named import

const loggedInUser = () => {
  // api call to check authentication
  return true;
};

// Composing components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>login</button>
      ) : (
        <button onClick={()=> setIsLoggedIn(true)}>logout</button>
      )}
    </div>
  );
};

export default Header;
