import React from "react";
import ProductNav from "../ProductNav/ProductNav";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
import data from "../dummy-store";

function BoardGamePage() {
  return (
    <div className="BoardGamePage">
      <div className="board-game-page">
        <ProductNav />
        <PopulateProducts data={data.magic} />
      </div>
    </div>
  );
}

export default BoardGamePage;
