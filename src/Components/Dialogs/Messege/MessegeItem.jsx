import classes from "./../Dialogs.module.css";

const Messege = (props) => {
  return <div className={classes.dialog}>{props.messege}</div>;
};

export default Messege;
