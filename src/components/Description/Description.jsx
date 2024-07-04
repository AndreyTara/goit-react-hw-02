import css from "./Description.module.css";

function Description() {
  return (
    <header>
      <h1>
        <span className={css.green}>Sip</span> Happens Café
      </h1>
      <p>
        Please leave your feedback <span className={css.fiolet}>about</span> our
        service <span className={css.fiolet}> by </span> <br />
        selecting one <span className={css.fiolet}> of the</span> options{" "}
        <span className={css.fiolet}>below</span>.
      </p>
    </header>
  );
}

export default Description;
