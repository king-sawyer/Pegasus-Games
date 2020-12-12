import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedItems.css";
import Context from "../../Context";

class FeaturedItem extends React.Component {
  static contextType = Context;

  render() {
    let featuredItems = this.context.products.filter((product) => {
      return product.featured === true;
    });
    return (
      <div className="featured-item">
        <h3 className="feature-h3">
          <u>Featured Items:</u>
        </h3>
        <div className="featured-flex-container">
          {featuredItems.map((item) => {
            return (
              <div key={item.id + 5} className="featured-item-div">
                <Link key={item.id + 4} to={`/item/${item.id}`}>
                  <ul key={item.id + 3} className="featured-ul">
                    <li key={item.id}>
                      {" "}
                      <img src={item.img} alt="product" />
                    </li>
                    <li key={item.id + 1}> {item.title}</li>
                    <li key={item.id + 2}>$ {item.price}</li>
                  </ul>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FeaturedItem;
