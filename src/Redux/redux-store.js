import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer, // за profilePage отвечает profileReducer и тд.
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer
}); // объединили 3 редьюсера из старого store в объект.

let store = createStore(reducers); // createStore создаёт внутри себя state с тремя свойствами из reducers.

Window.store = store; // сохранили store глобально в window.

export default store;
