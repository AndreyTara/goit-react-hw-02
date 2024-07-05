import css from "./Feedback.module.css";
// import { useState, useEffect } from "react";
function Feedback({ value, totalFeedback, positive, keysArrValue }) {
  console.log(totalFeedback);
  console.log(positive);
  console.log(keysArrValue);
  console.log(value);

  // const [total, setTotal] = useState(1);
  // const [positive, setPositive] = useState(0);

  // const keysArrValue = Object.keys(value);
  // useEffect(() => {
  //   const totalResult = keysArrValue.reduce((acc, item) => {
  //     return (acc += value[item]);
  //   }, 0);
  //   setTotal(totalResult);
  //   const positiveCount = keysArrValue
  //     .filter((item) => item !== "bad")
  //     .reduce((acc, item) => {
  //       return (acc += value[item]);
  //     }, 0);
  //   setPositive(Math.floor((positiveCount / totalResult) * 100));
  // }, [value, total]);

  return (
    <div className={css.wrap}>
      {/* {totalFeedback > 0 && (
        <div>
          {keysArrValue.map((item, index) => {
            return (
              <p key={index} className={css.p}>
                {item}: {value[item]}
              </p>
            );
          })}
          <p className={css.p}>Total: {totalFeedback}</p>
          <p className={css.p}>Positive: {positive}%</p>
        </div>
      )} */}
    </div>
  );
}

export default Feedback;
