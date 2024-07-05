import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import "./App.css";

function App() {
  const [votingList, setVotingList] = useState(() => {
    const savedData = JSON.parse(
      window.localStorage.getItem("client-reviews-voting")
    );
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
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [keysArrValue, setKeysArrValue] = useState([]);

  useEffect(() => {
    setKeysArrValue(Object.keys(votingList));
  }, []);

  useEffect(() => {
    const totalResult = keysArrValue.reduce((acc, item) => {
      return (acc += +votingList[item]);
    }, 0);
    setTotalFeedback(totalResult);
    const positiveCount = keysArrValue
      .filter((item) => item === "good")
      .reduce((acc, item) => {
        return (acc += +votingList[item]);
      }, 0);
    console.log(positiveCount);
    setPositiveFeedback(Math.round((positiveCount / totalResult) * 100));
  }, [votingList, totalFeedback]);

  /**
   * # updateFeedback
   * @param {String} feedbackType :'good','bad','neutral'
   */
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setVotingList({
        good: 0,
        bad: 0,
        neutral: 0,
      });
      return;
    }
    setVotingList((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    window.localStorage.setItem(
      "client-reviews-voting",
      JSON.stringify(votingList)
    );
  }, [votingList]);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        keysArrValue={keysArrValue}
        totalFeedback={totalFeedback}
      />
      {!totalFeedback > 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          votingList={votingList}
          keysArrValue={keysArrValue}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      <footer className="footer">Create by Andrii Tarabanchuk 2024</footer>
    </>
  );
}

export default App;
