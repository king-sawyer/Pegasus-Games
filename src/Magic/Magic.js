import React from "react";
import ProductNav from "../ProductNav/ProductNav";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
import data from "../dummy-store";

function BoardGamePage() {
  return (
    <div className="MagicPage">
      <div className="magic-page">
        <ProductNav />
        <PopulateProducts data={data.magic} />
      </div>
    </div>
  );
}

export default BoardGamePage;
