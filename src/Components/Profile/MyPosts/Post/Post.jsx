import classes from "./Post.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://img.kupigolos.ru/hero/5f3415d0df85d.png?p=bh&s=87424ffea9a98526b0c02b867b75c16e"
          alt=""
        />
        {props.massege}
        <div>
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
