import React from "react";
import VideoBox from "../components/VideoBox";
import Services from "../components/Services";
import Product from "../components/Product";
import shoes from "../data";

function Home({ service, product }) {
  return (
    <div>
      <div className="container mx-auto">
        <div id={service} className="section1">
          <div className="mt-32 grid justify-center">
            <input
              className="form-control me-2 w-80"
              type="text"
              placeholder="Enter Email"
              aria-label="Search"
            />
            <br />
            <div className="flex items-center justify-center">
              <button className="btn btn-outline-dark w-40">Get Started</button>
            </div>
          </div>
          <div className="mx-20 mt-20 mb-10">
            <Services />
          </div>
          <div className="flex justify-center items-center container">
            <VideoBox />
          </div>
        </div>
        <div className="flex justify-center section2" id={product}>
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 my-20">
            {shoes.map((element) => (
              <Product
                key={element.id}
                imageSrc={element.imageSrc}
                name={element.name}
                price={element.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
