const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  // нужен для нормального старта redux, тк state при инициализации андефайнед будет.
  posts: [
    // нижнее подчёркивание - приватное свойство, извне к нему не обращаться.
    { id: "1", messege: "Hi, how are you?", likesCount: 12 },
    { id: "2", messege: "Its my first post", likesCount: 9 }
  ],
  newPostText: "" // значение которое приходит из поля ввода textarea.
};

const profileReducer = (state = initialState, action) => {
  // initialState взят выше, далее при изменении будет приходит уже нужный state.
  // state=[posts] и newPostText: "(тут что вводится в textarea)"
  switch (
    action.type // свич по ключу action.type
  ) {
    case ADD_POST: {
      // если кейс равен ADD_POST
      let newPost = {
        id: 5,
        messege: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state; // если кейса такого нет все равно возврат.
  }
};

export const addPostActionCreactor = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  // приходит текст из textarea(profile)
  type: UPDATE_NEW_POST_TEXT,
  newText: text
}); //создали объкт {type: UPDATE-NEW-POST-TEXT, newText: text(из textarea)}

export default profileReducer;
//41 урок подробно про reducer
