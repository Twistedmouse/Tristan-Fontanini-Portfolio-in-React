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
        <p class="hiddenText">Click Image To View Repo.</p>
        <a
          href="https://twistedmouse.github.io/Javascript-Interactive-Quiz/"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={jsQuiz} alt="js-quiz-img" />
        </a>
        <a
          href="https://scratch.mit.edu/projects/483253369"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={scratchGame} alt="scratch-game-img" />
        </a>

        <a
          className="longTooltip"
          href="https://github.com/Twistedmouse/EXPRESS-yoURSELF"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work2" src={expressYourself} alt="express-yourself-img" />
        </a>

        <a
          href="https://github.com/Twistedmouse/I-CAN-HELP-WorkMarketPlace"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={iCanHelp} alt="i-can-help-img" />
        </a>
        <a
          class="dailySchedToolTip"
          href="https://github.com/Twistedmouse/Daily-Scheduler"
          target="_blank"
          data-tool-tip="Click to view"
          rel="noreferrer"
        >
          <img class="work" src={dayPlan} alt="daily-planner-img" />
        </a>
        <a
          className="longTooltip2"
          href="https://github.com/Twistedmouse/WEATHER-DASHBOARD"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work2" src={weather} alt="weather-tracker-img" />
        </a>
        <a
          class="bottomRowWork"
          href="https://github.com/Twistedmouse/Random-Password-Generator"
          data-tool-tip="Click to view"
          target="_blank"
          rel="noreferrer"
        >
          <img class="work" src={passwordGen} alt="password-generator-img" />
        </a>
        <a
          class="bottomRowWork"
          href="https://github.com/Twistedmouse/My-Mind-Matters"
          data-tool-tip="Click to view"
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
