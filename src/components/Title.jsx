import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

function Title() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl logoName">
        <h1 className="text-8xl mb-[-50px]">NIKE</h1>
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Wear the Best !")
              .pauseFor(2000)
              .deleteChars(21)
              .typeString("Best Quality !")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default Title;
