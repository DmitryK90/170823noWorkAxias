import React from "react";
import styles from "./users.module.css";
// import axios from "axios";
import axios, * as others from "axios";
import userPhoto from "../../assets/images/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc2ee812.2252011515270566041921.jpg";

let Users = (props) => {
  if (props.users.length === 0) {
    fetch("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => response.json())
      .then(data => {
        props.setUsers(data.items);
      })
    // axios
    //   .get("https://social-network.samuraijs.com/api/1.0/users")
    // .then((response) => {
    //   props.setUsers(response.data.items);
    // }); //https://social-network.samuraijs.com/docs#
  } // через библиотеку axios делаем запрос на сервер со списком пользователей.

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={userPhoto} //src={u.photo.small != null ? u.photo.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

// [
//   {
//     id: "1",
//     photoUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU",
//     followed: false,
//     fullName: "Dmitry",
//     status: "Boss",
//     location: { city: "Yaroslavl", country: "Russia" }
//   },
//   {
//     id: "2",
//     photoUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU",
//     followed: true,
//     fullName: "Sasha",
//     status: "User1",
//     location: { city: "Moscow", country: "Russia" }
//   },
//   {
//     id: "3",
//     photoUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU",
//     followed: false,
//     fullName: "Andrew",
//     status: "User2",
//     location: { city: "Novosibirsk", country: "Russia" }
//   }
// ]
