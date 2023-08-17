import React from "react";
import {
  addPostActionCreactor,
  updateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    post: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text); // передаём text в функцию в profile-reducer, она возвращает объект {type: UPDATE-NEW-POST-TEXT, newText: text(из textarea)}
      dispatch(action); //прокидываем объект action={type: UPDATE-NEW-POST-TEXT, newText: text(из textarea)}
    },
    addPost: () => {
      dispatch(addPostActionCreactor()); // вариант 1, объект передаём в store, который возвращает разметку нового поста
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// connect имеет свой subscribe и перерисовывает интерфейс локально сам.

export default MyPostsContainer; // контейнерная компонента это обёртка для обычной помпоненты
// удовлетворяет презентационную пропсами и тд., презентационную теперь можно испльзовать
// на любых проектах, тк она не к чему не привязана ни к каким данным.
