import react from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users // уёдёт в props ниже где connect, будут пользователи из state.
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId)); // диспатчим результат (followAC(userId) вернёт action )
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId)); // диспатчим результат (followAC(userId) вернёт action )
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users)); // диспатчим результат (followAC(userId) вернёт action )
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
