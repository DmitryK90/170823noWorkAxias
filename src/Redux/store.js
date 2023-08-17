import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        // нижнее подчёркивание - приватное свойство, извне к нему не обращаться.
        { id: "1", messege: "Hi, how are you?", likesCount: 12 },
        { id: "2", messege: "Its my first post", likesCount: 9 }
      ],
      newPostText: "" // значение которое приходит из поля ввода textarea.
    },
    dialogsPage: {
      dialogs: [
        { id: "1", name: "Dmitry" },
        { id: "2", name: "Andrey" },
        { id: "3", name: "Sveta" },
        { id: "4", name: "Alexandr" },
        { id: "5", name: "Victor" },
        { id: "6", name: "Valery" }
      ],
      messeges: [
        { id: 1, messege: "Hi" },
        { id: 2, messege: "How is your live?" },
        { id: 3, messege: "Yo" }
      ],
      newMessageBody: ""
    },
    sideBar: {}
  },

  _callSubscriber() {
    console.log("123");
  },

  getState() {
    // метод который возвращает state, тк _state приватный.
    return this._state; // обращение к свойству всегда через this.(this это store)
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer - паттрен наблюдатель слушатель.
  },

  dispatch(action) {
    // action получили из MyPosts, action={type: UPDATE-NEW-POST-TEXT, newPostText: text(из textarea)}
    this._state.profilePage = profileReducer(this._state.profilePage, action); // profilePage перезаписывается на то, то получаем при выполнении reducer-а
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this.state);
  }
}; //41 урок подробно про reducer

export default store;
window.store = store;
// тут хранятся данные которые потом уходят в видо props в ui react на отрисовку.
// _ с нижним подчеркиванием - приватные свойства.
