import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  // эта функция настраивает свойста
  return {
    dialogsPage: state.dialogsPage // это будет props, и будет перерисовка если он изменится.
  };
};
let mapDispatchToProps = (dispatch) => {
  // эта функция настраивает callback-и.
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// из библ. react-redux, вызываем дважды, законекчивает Dialogs и store
// рендерит Dialogs и в качестве props передаёт в неё те свойства которые в
// mapStateToProps и mapDispatchToProps.(возвращает каждая по объекту)

export default DialogsContainer;
