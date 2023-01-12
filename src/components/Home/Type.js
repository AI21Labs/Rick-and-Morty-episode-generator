import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Rickwarium Full of Mortfish",
          "Where Do The Ricks Play",
          "The Mortysburg Syndrome",
          "Where The Wild Morties Go",
          "Outrickous",
          "The Birdperson Paradox",
          "Jerry's Space Addiction",
          "Morty Christ Superstar",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
