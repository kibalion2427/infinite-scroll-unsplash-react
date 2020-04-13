import React from "react";
import ImageList from "./components/ImageList";
import Images from "./components/Images";

function App() {
  return (
    <div id="root">
      <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h2 className="subtitle is-6">Code Challenge #16</h2>
              <h1 className="title is-1">Infinitive Scroll Unsplash</h1>
            </div>

            <div className="images">
              {/* <ImageList /> */}
              <Images />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
