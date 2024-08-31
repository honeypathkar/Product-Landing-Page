import React from "react";
import VideoBox from "../components/VideoBox";
import Services from "../components/Services";
import Product from "../components/Product";
import shoes from "../data";
import Title from "../components/Title";

function Home({ service, product, home }) {
  return (
    <div>
      <div className="container mx-auto">
        <div id={home} className="section1 my-20 pt-40">
          <div className="flex justify-center">
            <Title />
          </div>
          <form
            action="https://getform.io/f/bgdyonra"
            method="POST"
            className="mt-20 grid justify-center"
          >
            <input
              className="form-control me-2 w-80"
              type="email"
              placeholder="Enter Email"
              name="email"
            />
            <br />
            <div className="flex items-center justify-center" type="submit">
              <button className="btn btn-outline-dark w-40">Get Started</button>
            </div>
          </form>
        </div>
        <div id={service} className="mt-20 pt-16">
          <div className="mx-20 mt-20 mb-10">
            <Services />
          </div>
          <div className="flex justify-center items-center container">
            <VideoBox />
          </div>
        </div>
        <div className="flex justify-center section2 pt-16" id={product}>
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
