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
        <p class="hiddenText">Click To View Repo.</p>
        <a
          href="https://twistedmouse.github.io/Javascript-Interactive-Quiz/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={jsQuiz} alt="js-quiz-img" />
        </a>
        <a
          href="https://scratch.mit.edu/projects/483253369"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={scratchGame} alt="scratch-game-img" />
        </a>

        <a
          href="https://github.com/Twistedmouse/EXPRESS-yoURSELF"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work2" src={expressYourself} alt="express-yourself-img" />
        </a>

        <a
          href="https://github.com/Twistedmouse/I-CAN-HELP-WorkMarketPlace"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={iCanHelp} alt="i-can-help-img" />
        </a>
        <a
          href="https://github.com/Twistedmouse/Daily-Scheduler"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={dayPlan} alt="daily-planner-img" />
        </a>
        <a
          href="https://github.com/Twistedmouse/WEATHER-DASHBOARD"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work2" src={weather} alt="weather-tracker-img" />
        </a>
        <a
          href="https://github.com/Twistedmouse/Random-Password-Generator"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={passwordGen} alt="password-generator-img" />
        </a>
        <a
          href="https://github.com/Twistedmouse/My-Mind-Matters"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={myMind} alt="my-mind-matters-img" />
        </a>
      </ul>
    </div>
  );
}

export default Project;
