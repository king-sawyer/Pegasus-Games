import React from "react";
import "./ProductNav.css";

function ProductNav() {
  if (window.location.pathname === "/board-games") {
    return (
      <div className="ProductNav">
        <div className="flexItem">
          <form className="flex-form">
            <label className="flexItem">
              Search: <input type="text" />
            </label>
            <div className="flexItem">
              <label>
                Filter:{" "}
                <select>
                  <option>None</option>
                  <option>Alphabetically</option>
                  <option>Price High-Low</option>
                  <option>Price Low-High</option>
                </select>
              </label>
            </div>
            <div className="flexItem">
              <input type="submit" />
            </div>
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
              Search: <input type="text" />
            </label>{" "}
          </div>
          <div className="flexItem">
            <label>
              Single Card Filter:{" "}
              <select>
                <option>All</option>
                <option>Single</option>
              </select>
            </label>
          </div>

          <div className="flexItem">
            <label>
              {" "}
              Filter:{" "}
              <select>
                <option>None</option>
                <option>Alphabetically</option>
                <option>Price High-Low</option>
                <option>Price Low-High</option>
              </select>
            </label>
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
