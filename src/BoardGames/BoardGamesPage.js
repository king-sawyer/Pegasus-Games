import React from "react";
// import ProductNav from "../ProductNav/ProductNav";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
import Context from "../Context";

class BoardGamePage extends React.Component {
  static contextType = Context;

  render() {
    this.context.products.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      return 0;
    });
    let boardGames = this.context.products.filter((game) => {
      return game.category === "boardGames";
    });
    return (
      <div className="BoardGamePage">
        <div className="board-game-page">
          {/* <ProductNav /> */}
          <PopulateProducts data={boardGames} />
        </div>
      </div>
    );
  }
}
export default BoardGamePage;
