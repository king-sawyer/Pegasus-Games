import React from "react";

function ProductNav() {
  if (window.location.pathname === "/board-games") {
    return (
      <div className="ProductNav">
        <form>
          <label>
            Search:
            <input type="text" />
          </label>
          <br />

          <select>
            <option>None</option>
            <option>Alphabetically</option>
            <option>Price High-Low</option>
            <option>Price Low-High</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    );
  }

  if (window.location.pathname === "/magic") {
    return (
      <div className="ProductNav">
        <form>
          <label>
            Search:
            <input type="text" />
          </label>{" "}
          <br />
          <label>
            All
            <input type="radio" name="query" value="" />
          </label>{" "}
          <br />
          <label>
            Singles
            <input type="radio" name="query" value="singles" />
          </label>
          <br />
          <label>
            Booster Packs
            <input type="radio" name="query" value="boosterPacks" />
          </label>
          <br />
          <label>
            {" "}
            Booster Boxes
            <input type="radio" name="query" value="boosterBoxes" />
          </label>
          <br />
          <select>
            <option>None</option>
            <option>Alphabetically</option>
            <option>Price High-Low</option>
            <option>Price Low-High</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ProductNav;
