import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreactor,
  updateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.post.map((p) => (
    <Post massege={p.messege} likesCount={p.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value; // значение из textarea
    props.updateNewPostText(text); // вызывает callback который в неё передали.
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          ref={newPostElement} // соединили textarea с перем. ref
          onChange={onPostChange} // закидываем значение в store
          value={props.newPostText} // из stote выводим в окно.
        />
      </div>
      <div>
        <button onClick={onAddPost}>Добавить пост</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
