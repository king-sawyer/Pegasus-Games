import React from "react";
import PopulateProducts from "../PopulateProducts/PopulateProducts";
import data from "../dummy-store";
import ProductNav from "../ProductNav/ProductNav";

function RPG() {
  return (
    <div className="RPG">
      <ProductNav />
      <PopulateProducts data={data.RPG} />
    </div>
  );
}

export default RPG;
