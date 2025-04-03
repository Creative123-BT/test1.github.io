import React from "react";
import Heading from "./components/heading/Heading";
import Cards from "./components/cards/Cards";

const OurServices = () => {
  return (
    <div id="our-services" className="min-h-screen "  style={{ marginTop: "var(--margin-top-lg)" }}>
      <Heading />
      <Cards />
    </div>
  );
};

export default OurServices;
