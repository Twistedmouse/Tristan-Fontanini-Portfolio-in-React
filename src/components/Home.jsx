import React from "react";
// import laptopImg from "/images/pngTreeLaptop.png";

function Home() {
  return (
    <div className="homeContainer">
      <div className="grid-container">
        <div className="helloDiv">
          <p className="helloMessage">Hey there, my name is</p>
        </div>
        <div className="h1Div">
          <h1 class="font-weight-light">
            <span id="nameT1">T</span>
            <span id="nameR">r</span>
            <span id="nameI1">i</span>
            <span id="nameS">s</span>
            <span id="nameT2">t</span>
            <span id="nameA1">a</span>
            <span id="nameN1">n</span>
            <span> </span>
            <span id="nameF">F</span>
            <span id="nameO">o</span>
            <span id="nameN1">n</span>
            <span id="nameT3">t</span>
            <span id="nameA2">a</span>
            <span id="nameN2">n</span>
            <span id="nameI2">i</span>
            <span id="nameN3">n</span>
            <span id="nameI3">i</span>
            <span id="nameCom">,</span>
          </h1>
        </div>
        <div className="pTagDiv">
          <p>
            I am a forever learning full stack developer who focuses more on the
            front end side. I really enjoy design and creating interesting UI/UX
            design where it fits. I have mostly worked with Html, CSS,
            Javascript, ReactJS and C#.
          </p>

          <p>
            Currently I am learning VR development, game dev and learning about
            machine learning and how I can make it work with gaming. Most of my
            experience is around web development and finding automated
            solutions. I get excited learning new things and plan to continue
            growing on my coding journey.
          </p>
          <p class="hoverText">HOVER OVER THE TEXT TO EXPAND</p>
        </div>
        <div className="imgTagDiv">
          <img
            className="imgTag"
            src="/images/pngTreeLaptop.png"
            alt="laptopImg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
