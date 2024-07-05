import css from "./Feedback.module.css";
// import { useState, useEffect } from "react";
function Feedback({
  votingList,
  totalFeedback,
  positiveFeedback,
  keysArrValue,
}) {
  return (
    <div className={css.wrap}>
      {keysArrValue.map((item, index) => {
        return (
          <p key={index} className={css.p}>
            {item}: {votingList[item]}
          </p>
        );
      })}
      <p className={css.p}>Total: {totalFeedback}</p>
      <p className={css.p}>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
