import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import "./App.css";

function App() {
  const [value, setValue] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("voting"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      bad: 0,
      neutral: 0,
    };
  });
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positive, setPositive] = useState(0);
  const [keysArrValue, setKeysArrValue] = useState([]);
  useEffect(() => {
    setKeysArrValue(Object.keys(value));
  }, []);
  useEffect(() => {
    const totalResult = keysArrValue.reduce((acc, item) => {
      return (acc += value[item]);
    }, 0);
    setTotalFeedback(totalResult);
    const positiveCount = keysArrValue
      .filter((item) => item !== "bad")
      .reduce((acc, item) => {
        return (acc += value[item]);
      }, 0);
    setPositive(Math.floor((positiveCount / totalResult) * 100));
  }, [value, totalFeedback]);

  /**
   * # updateFeedback
   * @param {String} feedbackType :'good','bad','neutral'
   */
  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    if (feedbackType === "reset") {
      setValue({
        good: 0,
        bad: 0,
        neutral: 0,
      });
      return;
    }
    setValue((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        keysArrValue={keysArrValue}
        totalFeedback={totalFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <Feedback
        value={value}
        totalFeedback={totalFeedback}
        positive={positive}
        keysArrValue={keysArrValue}
      />
      <footer className="footer">Create by Andrii Tarabanchuk 2024</footer>
    </>
  );
}

export default App;
