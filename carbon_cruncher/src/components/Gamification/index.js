import React from "react";
import "./styled.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressWrapper, ContainerGame, Treeks } from "./styled";

const Gamification = ({ percentage, goals }) => {
  const percent = percentage ? percentage : 70;
  const goal = goals ? goals : 10;
  const color = percent <= 50 ? "green" : percent <= 80 ? "gold" : "red";
  const d = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let name = month[d.getMonth()];
  return (
    <ContainerGame className="adjustment">
      <h3>
        Your Goal for {name} : reduce {goal} % of {month[d.getMonth() - 1]}
      </h3>
      <ProgressWrapper>
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          styles={buildStyles({
            textColor: `${color}`,
            pathColor: `${color}`,
          })}
        />
      </ProgressWrapper>
      <Treeks>
        <h4>Your Treeeeks !</h4>
        <div className="treeks-icons">
          <img src="/images/tree.png" />
          <img src="/images/tree.png" />
          <img src="/images/tree.png" />
          <span>/ 10</span>
        </div>
      </Treeks>
    </ContainerGame>
  );
};

export default Gamification;
