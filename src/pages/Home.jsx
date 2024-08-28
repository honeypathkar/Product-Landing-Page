import React from "react";
import InputBox from "../components/InputBox";
import VideoBox from "../components/VideoBox";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="mt-32 grid justify-center">
        <InputBox />
        <br />
        <div className="flex items-center justify-center">
          <button className="btn btn-outline-dark w-40">Get Started</button>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-16 space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Premium Material</h1>
          <p className="text-lg">
            For a company that generates thousands of mass-produced sneakers,
            Nike’s quality is relatively good. Different releases have differing
            levels of quality which is not always reflected in their pricing
            structure.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">Fast Shipping</h1>
          <p className="text-lg">
            We make sure you receive your Nike product as soon as we have
            finished making it. We also provide free returns if you are not
            satisfied.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">Quality Assurance</h1>
          <p className="text-lg">
            For every purchase you make, we will ensure there are no damages or
            faults, and we will check and test the pitch of your product.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center container">
        <VideoBox />
      </div>
    </div>
  );
}

export default Home;
