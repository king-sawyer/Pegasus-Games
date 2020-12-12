import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import { Route } from "react-router-dom";
import BoardGamePage from "./BoardGames/BoardGamesPage";
import Magic from "./Magic/Magic";
import "./App.css";
import RPG from "./RPG/RPG";
import About from "./About/About";
import SpecificProduct from "./SpecificProduct/SpecificProduct";
import Login from "./LogIn/LogIn";
import Context from "./Context";

class App extends Component {
  state = {
    products: [],
    handleSubmit: (e, loginInfo) => {
      e.preventDefault();
      console.log("click");
    },
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        }
        return response.json();
      })
      .then((products) => {
        this.setState({ products });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <main className="App">
          <Header />

          <div className="main-page">
            <Route path="/about" component={About} />
            <Route
              path="/item/:id"
              render={(rprops) => (
                <SpecificProduct {...rprops} products={this.state.products} />
              )}
            />
            <Route path="/rpg" component={RPG} />
            <Route path="/magic" component={Magic} />
            <Route path="/board-games" component={BoardGamePage} />
            <Route path="/admin" render={(rprops) => <Login {...rprops} />} />
            <Route exact path="/" component={HomePage} />
          </div>

          <Footer />
        </main>
      </Context.Provider>
    );
  }
}

export default App;
