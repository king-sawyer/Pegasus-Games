import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedItems.css";
import data from "../../dummy-store";

function FeaturedItem() {
  return (
    <div className="featured-item">
      <h3 className="feature-h3">Featured Items:</h3>
      <div className="featured-flex-container">
        {data.featured.map((item) => {
          return (
            <div className={item.div}>
              <Link to={item.link}>
                <ul className="featured-ul">
                  <li>
                    {" "}
                    <img src={item.img} alt="product" />
                  </li>
                  <li> {item.title}</li>
                  <li> {item.price}</li>
                </ul>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedItem;
