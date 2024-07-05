import css from "./Options.module.css";

function Options({ totalFeedback, keysArrValue, updateFeedback }) {
  return (
    <div className={css.wrap}>
      {keysArrValue.map((item, index) => {
        return (
          <button
            key={index}
            className={css.btn}
            onClick={() => updateFeedback(`${item}`)}
          >
            {item}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button
          id="reset "
          className={css.btn}
          onClick={() => updateFeedback(`reset`)}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
