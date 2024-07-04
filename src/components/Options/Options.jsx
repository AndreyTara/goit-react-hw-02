import { Children } from "react";
import css from "./Options.module.css";

function Options({ value, onClick = (e) => console.log(e.target) }) {
  return (
    <>
      {Object.keys(value).map((item) => {
        return (
          <button id={item} className={css.btn} onClick={onClick}>
            {item}
          </button>
        );
      })}
      {/* <button className={css.btn} onClick={onClick}>
        Reset
      </button> */}
    </>
  );
}

export default Options;
