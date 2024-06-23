import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = ({ score }) => {
  const percentage = (score / 10) * 100;

  return (
    <div className="w-[50px] h-[50px]">
      <CircularProgressbar
        value={percentage}
        text={`${score.toFixed(1)}/10`}
        background
        backgroundPadding={3}
        styles={buildStyles({
          // Text size
          textSize: "18px",
          textColor: "#000",
          pathColor: `rgba(255, 0, 0, ${percentage / 100})`,
          trailColor: "#d6d6d6",
          fontWeight: "700",
          backgroundColor: "white",
        })}
      />
    </div>
  );
};
export default CircleProgress;
