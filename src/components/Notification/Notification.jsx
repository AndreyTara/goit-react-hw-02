import css from "./Notification.module.css";

function Notification({ totalFeedback }) {
  return (
    <div className={css.wrap}>
      {!totalFeedback > 0 && <p className={css.p}>No feedback yet!</p>}
    </div>
  );
}
export default Notification;
