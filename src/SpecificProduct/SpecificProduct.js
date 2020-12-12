import React from "react";
import { Redirect } from "react-router-dom";
import "./SpecificProduct.css";
import Context from "../Context";

class SpecificProduct extends React.Component {
  static contextType = Context;
  render() {
    let itemToShow =
      this.context.products.find(
        (item) => item.id.toString() === this.props.match.params.id
      ) || null;

    return itemToShow ? (
      <div className="product">
        <h2>
          <u>{itemToShow.title}</u>
        </h2>
        <div></div>
        <ul className="specific-product-ul">
          <div className="flex-item">
            <li className="specific-product-li">
              {" "}
              <img src={itemToShow.img} alt="specified-product" />
            </li>
          </div>
          <div className="flex-item">
            <li className="specific-product-li">{itemToShow.title}</li>
            <li className="specific-product-li">
              <hr />
            </li>
            <li className="specific-product-li">${itemToShow.price}</li>
            <li className="specific-product-li">
              Available: {itemToShow.available}
            </li>
          </div>
        </ul>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default SpecificProduct;
