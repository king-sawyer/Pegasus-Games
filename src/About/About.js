import React from "react";
import "./About.css";
function About() {
  return (
    <div className="About">
      <div className="flex-item">
        <div className="info">
          <h3>Welcome to Pegasus Games!</h3>
          <p>
            Pegasus Games is a locally owned game store ran and owned by Marc
            LeRoux.
          </p>
          <p>
            Pegasus is a great spot for all gaming needs whether it is Magic:
            The Gathering, Board Games, Card Games, Warhammer, RPGs or anything
            else related to gaming.
          </p>
          <hr />
        </div>
      </div>
      <div className="flex-item">
        <div className="facebook">
          <h4>Check us out on Facebook!</h4>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPegasus-Games-153376004700070%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            width="500"
            height="300"
            style={{ border: "none" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="fb"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
