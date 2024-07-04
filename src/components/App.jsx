import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
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
  /**
   * # updateFeedback
   * @param {String} feedbackType :'good','bad','neutral'
   */
  const updateFeedback = (feedbackType) => {
    const textContentBtn = feedbackType.target.textContent;
    setValue((prev) => ({
      ...prev,
      [textContentBtn]: prev[textContentBtn] + 1,
    }));
  };
  return (
    <>
      <Description />
      <Options value={value} updateFeedback={updateFeedback} />
      <Feedback value={value} />
      <footer className="footer">Create by Andrii Tarabanchuk 2024</footer>
    </>
  );
}

export default App;
