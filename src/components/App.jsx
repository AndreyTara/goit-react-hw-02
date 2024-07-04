import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    good: 1,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options value={value} />
      <Feedback value={value} />
      <footer className="footer">Create by Andrii Tarabanchuk 2024</footer>
    </>
  );
}

export default App;
