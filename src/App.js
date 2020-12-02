import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import { Route } from "react-router-dom";
import BoardGamePage from "./BoardGames/BoardGamesPage";
import Magic from "./Magic/Magic";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />

      <div className="main-page">
        <Route path="/magic" component={Magic} />
        <Route path="/board-games" component={BoardGamePage} />
        <Route exact path="/" component={HomePage} />
      </div>

      <Footer />
    </main>
  );
}

export default App;
