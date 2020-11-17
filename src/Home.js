import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-img" src="img/homeImg.jpg" alt="HomeImg" />

        <div className="home-row">
          <Product
            id="1"
            title="The Lean Start Up"
            description="How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            img="img/leanStartUp.jpg"
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking"
            description="Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={250.0}
            rating={4}
            img="img/KenwoodKMix.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            img="img/speaker.jpg"
          />

          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            img="img/iPad.jpg"
          />

          <Product
            id="6"
            title="Smart Watch"
            description="How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={59.99}
            rating={2}
            img="img/smartWatch.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            img="img/samsungMonitor.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
