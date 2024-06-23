import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/Header"; //default import
import Body from "../components/Body";
import Footer from "../components/Footer";

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
