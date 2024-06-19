import React from "react";
import { createRoot } from "react-dom/client";

const Title = () => {
  return (
    <a>
      <img
        className="logo"
        alt="logo"
        src="https://th.bing.com/th/id/R.dd4d1acde8fc22ed40fbce3acde6e99a?rik=%2b8JTWnyz2QTWFg&riu=http%3a%2f%2ffoodvilla.no%2fsrc%2fimg%2flogo.png&ehk=Wphc3mBmMYs0rOR4MjkO1zykcVnnjbx6MEDy3h1PSkw%3d&risl=&pid=ImgRaw&r=0"
      />
    </a>
  );
};

// Composing components
const Header = () => {
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
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  image:
    "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

const RestoCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} alt="burger" />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",")}</h3>
      <h3>{burgerKing.rating} stars</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restoList">
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
