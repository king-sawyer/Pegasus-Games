import React from "react";
import Context from "../../Context";
import "./Admin.css";
import config from "../../config";
import tokenService from "../../Services/token-service";

class Admin extends React.Component {
  state = {
    chosenProduct: 0,
    displayModify: false,
    displayAdd: false,
    error: null,
    addMessage: null,
    modifyProductMessage: null,
  };
  static contextType = Context;
  handleChange = (id) => {
    this.setState({
      error: null,
      modifyProductMessage: null,
      addMessage: null,
    });
    if (id !== "blank") {
      this.setState({
        chosenProduct: this.context.products.find((product) => {
          return product.id == id;
        }),
      });
      if (id === "blank") {
        this.setState({
          chosenProduct: null,
        });
      }
    }
  };
  displayModify = () => {
    this.setState({
      displayModify: !this.state.displayModify,
    });
  };
  displayAdd = () => {
    this.setState({
      displayAdd: !this.state.displayAdd,
    });
  };
  renderSelect = () => {
    if (this.state.chosenProduct.category === "magic") {
      return (
        <select name="categorySelect">
          <option value="boardGames">Board Game</option>
          <option selected="selected" value="magic">
            Magic
          </option>
          <option value="rpg">RPG</option>
        </select>
      );
    } else if (this.state.chosenProduct.category === "boardGames") {
      return (
        <select name="categorySelect">
          <option selected="selected" value="boardGames">
            Board Game
          </option>
          <option value="magic">Magic</option>
          <option value="rpg">RPG</option>
        </select>
      );
    } else if (this.state.chosenProduct.category === "rpg") {
      return (
        <select name="categorySelect">
          <option value="boardGames">Board Game</option>
          <option value="magic">Magic</option>
          <option selected="selected" value="rpg">
            RPG
          </option>
        </select>
      );
    } else {
      return (
        <select name="categorySelect">
          <option selected="selected" value="boardGames">
            Board Game
          </option>
          <option value="magic">Magic</option>
          <option value="rpg">RPG</option>
        </select>
      );
    }
  };
  renderFeatured = () => {
    if (this.state.chosenProduct.featured === true) {
      return (
        <label className="formItem">
          Do you want this item to be featured on the main page?:
          <select name="featuredSelect" required>
            <option selected="selected">Yes</option>
            <option>No</option>
          </select>
        </label>
      );
    } else {
      return (
        <label className="formItem">
          Do you want this item to be featured on the main page?:
          <select name="featuredSelect" required>
            <option>Yes</option>
            <option selected="selected">No</option>
          </select>
        </label>
      );
    }
  };
  addProduct = (e) => {
    this.setState({
      addMessage: null,
    });
    e.preventDefault();
    const {
      title,
      price,
      available,
      imgURL,
      singleSelect,
      categorySelect,
      featuredSelect,
    } = e.target;
    const newProduct = {
      title: title.value,
      price: price.value,
      available: available.value,
      img: imgURL.value,
      single: singleSelect.value,
      category: categorySelect.value,
      featured: featuredSelect.value,
    };
    console.log(newProduct);

    fetch(`https://warm-springs-30260.herokuapp.com/api/products`, {
      method: "post",
      headers: {
        Authorization: "bearer " + tokenService.hasAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          this.setState({
            addMessage:
              "Product successfully added! To see the product, click on the relevant page and refresh!",
          });
        }
        res.json();
      })
      .then((product) => {
        this.context.products = [...this.context.products, product];
      })
      .catch((error) => {
        console.error(error);
      });
  };

  modifyProduct = (e) => {
    e.preventDefault();
    const {
      id,
      title,
      price,
      available,
      imgURL,
      singleSelect,
      categorySelect,
      featuredSelect,
    } = e.target;
    const modifiedProduct = {
      id: this.state.chosenProduct.id,
      title: title.value,
      price: price.value,
      available: available.value,
      img: imgURL.value,
      single: singleSelect.value,
      category: categorySelect.value,
      featured: featuredSelect.value,
    };

    fetch(`https://warm-springs-30260.herokuapp.com/api/products`, {
      method: "PATCH",
      headers: {
        Authorization: "bearer " + tokenService.hasAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        } else {
          this.setState({
            modifyProductMessage: "Product successfully modified!",
          });
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  deleteProduct = (e) => {
    this.setState({ error: null });
    e.preventDefault();
    let { id } = this.state.chosenProduct;
    let productToDelete = { id };

    fetch(`https://warm-springs-30260.herokuapp.com/api/products`, {
      method: "DELETE",
      headers: {
        Authorization: "bearer " + tokenService.hasAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToDelete),
    })
      .then((response) => {
        if (!response.ok) {
          return response
            .json()
            .then(
              (e) => Promise.reject(e),
              this.setState({ error: "Please select an item to delete" })
            );
        } else {
          this.setState({
            error:
              "Product successfully deleted! To see the change, go to the relevant page and refresh.",
          });
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    this.context.products.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      return 0;
    });
    return (
      <div className="admin">
        <h3 className="dropDown" onClick={this.displayModify}>
          <u>Modify Product/Delete Product:</u>
        </h3>

        {this.state.displayModify && (
          <>
            <form onChange={(e) => this.handleChange(e.target.value)}>
              <label>
                Products to modify:{" "}
                <select>
                  <option value="blank">-----</option>
                  {this.context.products.map((product) => {
                    return (
                      <option key={product.id} value={product.id}>
                        {product.title}
                      </option>
                    );
                  })}
                </select>
              </label>
            </form>
            <form
              className="productToModify"
              onSubmit={(e) => this.modifyProduct(e, e.target)}
            >
              <label className="formItem">
                Product Title:
                <input
                  name="title"
                  required
                  type="text"
                  defaultValue={this.state.chosenProduct.title}
                />
              </label>
              <label className="formItem">
                Price(without a $):
                <input
                  name="price"
                  required
                  type="text"
                  defaultValue={this.state.chosenProduct.price}
                />
              </label>
              <label className="formItem">
                Available:
                <input
                  name="available"
                  required
                  type="text"
                  defaultValue={this.state.chosenProduct.available}
                />
              </label>
              <label className="formItem">
                Image URL:
                <input
                  name="imgURL"
                  required
                  type="text"
                  defaultValue={this.state.chosenProduct.img}
                />
              </label>
              <label className="formItem">
                Category:
                <select name="categorySelect">
                  <option selected="selected" value="boardGames">
                    Board Game
                  </option>
                  <option value="magic">Magic</option>
                  <option value="rpg">RPG</option>
                </select>
              </label>
              <label className="formItem">
                Do you want this item to be featured on the main page?:
                <select required name="featuredSelect">
                  <option value={true}>Yes</option>
                  <option selected="selected" value={false}>
                    No
                  </option>
                </select>
              </label>

              <label className="formItem">
                Is it a single Magic card?:
                <select name="singleSelect">
                  <option>Yes</option>
                  <option selected="selected">No</option>
                </select>
              </label>
              <div className="formItem">
                <input type="submit" value="MODIFY PRODUCT" />
              </div>
              <div className="formItem">
                <button onClick={(e) => this.deleteProduct(e)}>
                  DELETE PRODUCT{" "}
                </button>
                {this.state.error && <p>{this.state.error}</p>}
                {this.state.modifyProductMessage && (
                  <p>{this.state.modifyProductMessage}</p>
                )}
              </div>
            </form>
          </>
        )}

        <div className="addProduct">
          <h3 className="dropDown" onClick={this.displayAdd}>
            <u>Add Product:</u>
          </h3>

          {this.state.displayAdd && (
            <>
              <form
                className="productToModify"
                onSubmit={(e) => {
                  this.addProduct(e, e.target);
                }}
              >
                <label className="formItem">
                  Product Title:
                  <input required name="title" type="text" />
                </label>
                <label className="formItem">
                  Price(without a $):
                  <input required name="price" type="text" />
                </label>
                <label className="formItem">
                  Available:
                  <input required name="available" type="text" />
                </label>
                <label className="formItem">
                  Image URL:
                  <input required name="imgURL" type="text" />
                </label>
                <label className="formItem">
                  Category:
                  <select required name="categorySelect">
                    <option value="boardGames">Board Game</option>
                    <option value="magic">Magic</option>
                    <option value="rpg">RPG</option>
                  </select>
                </label>
                <label className="formItem">
                  Is it a single Magic card?:
                  <select required name="singleSelect">
                    <option value={true}>Yes</option>
                    <option selected="selected" value={false}>
                      No
                    </option>
                  </select>
                </label>
                <label className="formItem">
                  Do you want this item to be featured on the main page?:
                  <select required name="featuredSelect">
                    <option value={true}>Yes</option>
                    <option selected="selected" value={false}>
                      No
                    </option>
                  </select>
                </label>
                <div className="formItem">
                  <input required type="submit" value="ADD PRODUCT" />
                  {this.state.addMessage && <p>{this.state.addMessage}</p>}
                </div>
              </form>{" "}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Admin;
