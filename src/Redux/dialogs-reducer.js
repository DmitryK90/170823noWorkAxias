const UPDATE_NEW_MESSEGE_BODY = "newMessageBody";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  // нужен для нормального старта redux, тк state при инициализации андефайнед будет.
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
};

const dialogsReducer = (state = initialState, action) => {
  // initialState взят выше, далее при изменении будет приходит уже нужный state.
  switch (
    action.type // свич по ключу action.type
  ) {
    case UPDATE_NEW_MESSEGE_BODY: // если action={type: newMessageBody}
      return {
        ...state,
        newMessageBody: action.body // перезитираем сразу при копировании.
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messeges: [...state.messeges, { id: 4, messege: body }] // подмассив копируем и пушим в конец новое сообщение.
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSEGE_BODY,
  body: body
});

export default dialogsReducer;
//41 урок подробно про reducer
