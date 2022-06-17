import React from "react";
import jsQuiz from "../Images/js-quiz.png";
import scratchGame from "../Images/scratch_demo.jpg";
import expressYourself from "../Images/express-yourself-face.png";
import dayPlan from "../Images/dayPlanner.png";
import iCanHelp from "../Images/homepage.jpg";
import passwordGen from "../Images/password-gen.png";
import myMind from "../Images/myMINDmatters.png";
import weather from "../Images/bubble.gif";

function Project() {
  return (
    <div className="projectContainer">
      <h1 className="ProjectH1">Project Work</h1>
      <ul className="workContainer">
        <img class="work" src={jsQuiz} alt="js-quiz-img" />
        <img class="work" src={scratchGame} alt="scratch-game-img" />
        <img class="work2" src={expressYourself} alt="express-yourself-img" />
        <img class="work" src={iCanHelp} alt="i-can-help-img" />
        <img class="work" src={dayPlan} alt="daily-planner-img" />
        <img class="work2" src={weather} alt="weather-tracker-img" />
        <img class="work" src={passwordGen} alt="password-generator-img" />
        <img class="work" src={myMind} alt="my-mind-matters-img" />
      </ul>
    </div>
  );
}

export default Project;
