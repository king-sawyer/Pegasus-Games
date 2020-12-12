import React from "react";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="home-page-div">
      <div className="imageHolder">
        <div className="mainPageImage">
          <img src="/images/bookshelf2.jpg" alt="bookshelf1" />
        </div>
        <div className="mainPageImage">
          <img src="/images/bookshelf1.jpg" alt="bookshelf" />
        </div>
        <div className="mainPageImage">
          <img src="/images/bookshelf3.jpg" alt="bookshelf2" />
        </div>
        <div className="mainPageImage">
          <img src="/images/bookshelf4.jpg" alt="bookshelf2" />
        </div>
        <div className="mainPageImage">
          <img src="/images/bookshelf5.jpg" alt="bookshelf2" />
        </div>
      </div>
      <div className="imageHolderButSmaller">
        <div className="mainPageImageButSmaller">
          <img src="/images/smallerImages/smallerimages.jpg" alt="bookshelf1" />
        </div>
        <div className="mainPageImageButSmaller">
          <img
            src="/images/smallerImages/smallerimages2.jpg"
            alt="bookshelf1"
          />
        </div>
        <div className="mainPageImageButSmaller">
          <img src="/images/smallerImages/image2.jpg" alt="bookshelf1" />
        </div>
        <div className="mainPageImageButSmaller">
          <img src="/images/smallerImages/image3.jpg" alt="bookshelf1" />
        </div>
        <div className="mainPageImageButSmaller">
          <img
            src="/images/smallerImages/smallerimages3.jpg"
            alt="bookshelf1"
          />
        </div>
        <div className="mainPageImageButSmaller">
          <img src="/images/smallerImages/insideStore.jpg" alt="bookshelf1" />
        </div>
      </div>

      <FeaturedItems />
    </div>
  );
}

export default HomePage;
