import React from "react";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-div">
      <div className="pictures-of-store">
        <img src="/images/insideStore.jpg" alt="store" />
      </div>
      <FeaturedItems />
    </div>
  );
}

export default HomePage;
