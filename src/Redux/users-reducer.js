const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  // нужен для нормального старта redux, тк state при инициализации андефайнед будет.
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: // подписываемся
      return {
        ...state, // делаем копию state
        users: state.users.map((u) => {
          // делаем копию users
          if (u.id === action.userId) {
            return { ...u, followed: true }; // то возвращаем копию конкретного юзера.
          }
          return u;
        })
      };
    case UNFOLLOW: // отписываемся
      return {
        ...state, // делаем копию state
        users: state.users.map((u) => {
          // делаем копию users
          if (u.id === action.userId) {
            return { ...u, followed: false }; // то возвращаем копию конкретного юзера.
          }
          return u;
        })
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }; // берём юзеров из экшена и добавляем в state, склеиваем старых с новыми.
    default:
      return state;
  }
};

// редьюсеры:
export const followAC = (userId) => ({ type: FOLLOW, userId }); // возвращает action.
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users }); //возьмём юзеров с сервака и вставим в state.

export default usersReducer;
