import React from "react";
import { Link } from "react-router-dom";
import "./PopulateProducts.css";

function PopulateProducts(props) {
  return (
    <div className="PopulateProducts">
      {props.data.map((item, i) => {
        return (
          <div key={i + 7} className="product-item">
            <Link key={i + 5} to={`/item/${item.id}`}>
              <ul key={i + 4} className="product-ul">
                <div className="image">
                  <li key={i} className="product-image" key={item.id}>
                    {" "}
                    <img src={item.img} alt="product" />
                  </li>
                </div>
                <div key={i + 6} className="holder">
                  <div className="list-items">
                    <li key={i + 1} className="product-li">
                      {" "}
                      {item.title}
                    </li>
                    <li key={i + 2} className="product-li">
                      {" "}
                      $ {item.price}
                    </li>
                    <li key={i + 3} className="product-li">
                      In Stock: {item.available}
                    </li>
                  </div>
                </div>
              </ul>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PopulateProducts;
