import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/massages"
        >
          Massages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
