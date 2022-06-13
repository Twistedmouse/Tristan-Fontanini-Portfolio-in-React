import React from "react";

function About() {
  return (
    <div className="aboutContainer">
      <div className="grid-container">
        <h1 className="aboutHeader">About</h1>
        <div className="aboutPTagDiv">
          <p>
            I started my coding journey back in 2020 during a 3 week covid lock
            down in Western Australia. With the sudden spare time i received
            that I felt like I didn't have before I begun trying to make a game.
            As fun as it was to learn over 6 months I felt like I was just
            stumbling around I learning bad habits, Not knowing what to do or
            how to approach the error walls i was stuck behind. At this point I
            thought it would be worth going back to school at the age of 30,
            cutting back my work hours and joining the UWA codding bootcamp
            along with a few self learning courses I did before hand such as the
            Harvard CS50 course. These courses were tough but i learnt a lot
            about myself and what i could achieve. Before this course I had no
            interest in web development but very quickly fell in love with CSS
            and designing user experiences.
          </p>
          <p>
            Now that I have reached the end of my studies even with all the
            knowledge I have developed/obtained I believe I'v just hit the tip
            of the iceberg and still have so much to learn. I am continuing my
            journey with web development but plan to move back into game dev,
            and even have a stab at VR applications. As frustrating as learning
            to code can be theres is something extremely satisfying about
            solving a problem and seeing your hard work appear on screen and
            have people using something that you have had a part in creating.
          </p>
          <p class="hoverText">HOVER OVER THE TEXT TO EXPAND</p>
        </div>
      </div>
    </div>
  );
}

export default About;
