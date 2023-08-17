import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/MessegeItem";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messegesElements = state.messeges.map((m) => (
    <Messege messege={m.messege} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody; // проверить по видео.

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value; // введёное значение
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItets}>{dialogsElements}</div>
      <div className={classes.messege}>
        <div>{messegesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
