import React from "react";
import Typewriter from "typewriter-effect";

const Writing = (props) => {
  return (
    <h3>
      <Typewriter
        options={{ loop: true, autoStart: true, deleteSpeed: "natural", delay: 60 }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, my name is Dejan")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Welcome to my portfolio page")
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
      />
    </h3>
  );
};

export default Writing;
