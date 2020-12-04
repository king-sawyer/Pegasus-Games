import React from "react";
import { Link } from "react-router-dom";
import "./PopulateProducts.css";

function PopulateProducts(props) {
  return (
    <div className="PopulateProducts">
      {props.data.map((item) => {
        return (
          <div className="product-item">
            <Link to={`/item/${item.id}`}>
              <ul className="product-ul">
                <li className="product-image" key={item.id}>
                  {" "}
                  <img src={item.img} alt="product" />
                </li>
                <li className="product-li"> {item.title}</li>
                <li className="product-li"> {item.price}</li>
                <li className="product-li">In Stock: {item.availability}</li>
              </ul>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PopulateProducts;
