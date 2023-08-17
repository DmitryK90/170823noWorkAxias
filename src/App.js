import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContaiter from "./Components/Dialogs/DialogsContainer";

export default function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/massages" element={<DialogsContaiter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UsersContainer />} />

          {/* <Route path="/massages" render={() => <Dialogs />} />
            <Route path="/profile" render={() => <Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
}
