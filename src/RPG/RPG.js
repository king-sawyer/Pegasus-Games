import React from "react";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
// import ProductNav from "../ProductNav/ProductNav";
import Context from "../Context";

class RPG extends React.Component {
  static contextType = Context;

  render() {
    let rpgGames = this.context.products.filter((rpg) => {
      return rpg.category === "rpg";
    });
    return (
      <div className="RPG">
        {/* <ProductNav /> */}
        <PopulateProducts data={rpgGames} />
      </div>
    );
  }
}
export default RPG;
