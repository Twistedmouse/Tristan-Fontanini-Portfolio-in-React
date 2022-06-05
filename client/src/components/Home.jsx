import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="Container">
        <div className="grid-container">
          <div class="row align-items-center ">
            <div class="col-lg-5">
              <div className="pTagColorDiv">
                <p className="pTagColor">Hey there, my name is</p>
              </div>
              <div className="h1ColorChangeDiv">
                <h1 className="h1ColorChange" class="font-weight-light">
                  Tristan Fontanini,
                </h1>
              </div>
              <div className="pTagDiv">
                <p>
                  I am a forever learning full stack developer who focuses more
                  on the front end side. I really enjoy design and creating
                  interesting UI/UX design where it fits. I have mostly worked
                  with Html, CSS, Javascript, ReactJS and C#. Currently I am
                  learning VR development, game dev and learning about machine
                  learning and how I can make it work with gaming. Most of my
                  experience is around web development and finding automated
                  solutions. I get excited learning new things and plan to
                  continue growing on my coding journey.
                </p>
              </div>
              <div className="imgTagDiv">
                <p className="imgTag"> image here replace with img tag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
