import { Children } from "react";
import css from "./Options.module.css";

function Options({ value, updateFeedback }) {
  return (
    <div>
      {Object.keys(value).map((item) => {
        return (
          <button id={item} className={css.btn} onClick={updateFeedback}>
            {item}
          </button>
        );
      })}
      {/* <button className={css.btn} onClick={onClick}>
        Reset
      </button> */}
    </div>
  );
}

export default Options;
