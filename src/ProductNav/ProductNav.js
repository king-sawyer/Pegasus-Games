import React from "react";
import "./ProductNav.css";

function ProductNav() {
  if (window.location.pathname === "/board-games") {
    return (
      <div className="ProductNav">
        <div className="flexItem">
          <form className="flex-form">
            <label className="flexItem">
              Search:
              <input type="text" className="flexItem" />
            </label>
            <br />

            <div className="flexItem">
              <select>
                <option>None</option>
                <option>Alphabetically</option>
                <option>Price High-Low</option>
                <option>Price Low-High</option>
              </select>
            </div>

            <input type="submit" className="flexItem" />
          </form>
        </div>
      </div>
    );
  }

  if (window.location.pathname === "/magic") {
    return (
      <div className="ProductNav">
        <form className="flex-form">
          <div className="flexItem">
            <label>
              Search:
              <input type="text" />
            </label>{" "}
          </div>
          <br />
          <div className="flexItem">
            <label>
              All
              <input type="radio" name="query" value="" className="flexItem" />
            </label>{" "}
          </div>
          <br />
          <div className="flexItem">
            <label>
              Singles
              <input
                type="radio"
                name="query"
                value="singles"
                className="flexItem"
              />
            </label>
          </div>
          <br />
          <div className="flexItem">
            <label>
              Booster Packs
              <input
                type="radio"
                name="query"
                value="boosterPacks"
                className="flexItem"
              />
            </label>
          </div>
          <br />
          <div className="flexItem">
            <label>
              {" "}
              Booster Boxes
              <input
                type="radio"
                name="query"
                value="boosterBoxes"
                className="flexItem"
              />
            </label>
          </div>
          <br />
          <div className="flexItem">
            <select>
              <option>None</option>
              <option>Alphabetically</option>
              <option>Price High-Low</option>
              <option>Price Low-High</option>
            </select>
          </div>
          <div className="flexItem">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
  if (window.location.pathname === "/rpg") {
    return (
      <form>
        <input type="text" />
      </form>
    );
  }
}

export default ProductNav;
