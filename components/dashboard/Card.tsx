import React from "react";
import Styles from "@/styles/dashboard/card.module.css";
import ProgressBar from "./ProgressBar";

const Card = ({ title,subTitle,progress, progressBar }: any) => {
  return (
    <div className={Styles.secondItem} style={{height:progressBar?'135px':'110px'}}>
      <span>{title}</span>
      <br />
      <strong>{subTitle}</strong>
      {progressBar && (
        <ProgressBar
          position={"relative"}
          height={"8px"}
          marginTop={"26px"}
          backgroundColor={"#EAFDFC"}
          progressData={progress}
          progressColor={"#00D7FF"}
        />
      )}
      <div className={Styles.ring}>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
