import React from "react";
// import ProductNav from "../ProductNav/ProductNav";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
import Context from "../Context";

class BoardGamePage extends React.Component {
  static contextType = Context;
  render() {
    let magicProducts = this.context.products.filter((product) => {
      return product.category === "magic";
    });
    return (
      <div className="MagicPage">
        <div className="magic-page">
          {/* <ProductNav /> */}
          <PopulateProducts data={magicProducts} />
        </div>
      </div>
    );
  }
}
export default BoardGamePage;
