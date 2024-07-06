import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import "./App.css";

function App() {
  //hook for update value 'votingList'
  const [votingList, setVotingList] = useState(() => {
    // get localStorage save data  value 'votingList'
    const savedData = JSON.parse(
      window.localStorage.getItem("client-reviews-voting")
    );
    // if data Put data LS to value 'votingList'
    if (savedData) {
      return savedData;
    }
    //return value 'votingList' empty
    return {
      good: 0,
      bad: 0,
      neutral: 0,
    };
  });

  //update LocalStorage with key 'client-reviews-voting'
  useEffect(() => {
    window.localStorage.setItem(
      "client-reviews-voting",
      JSON.stringify(votingList)
    );
  }, [votingList]);

  //update keysArrValue
  const keysArrValue = Object.keys(votingList);
  let totalFeedback = keysArrValue.reduce((acc, item) => {
    return (acc += +votingList[item]);
  }, 0);

  //update positiveCount count value to votingList['good']
  let positiveCount = keysArrValue
    .filter((item) => item === "good")
    .reduce((acc, item) => {
      return (acc += +votingList[item]);
    }, 0);

  //update positiveFeedback
  let positiveFeedback = Math.round((positiveCount / totalFeedback) * 100);

  /**
   * # updateFeedback
   * @param {String} feedbackType :'good','bad','neutral'
   */
  const updateFeedback = (feedbackType) => {
    setVotingList((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setVotingList((prev) => ({
      ...prev,
      good: 0,
      bad: 0,
      neutral: 0,
    }));
  };
  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        keysArrValue={keysArrValue}
        totalFeedback={totalFeedback}
      />
      {!(totalFeedback > 0) && <Notification />}
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
