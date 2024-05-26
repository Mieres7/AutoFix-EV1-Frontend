import { NavLink } from "react-router-dom";
import { BellIcon, MessageIcon, ProfileIcon } from "../assets/Icons";

export function Header2() {
  return (
    <nav className="header">
      <div className="header-left-items2">
        <span>AUTOFIX</span>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/vehicles">Vehicles</NavLink>
          </li>
          <li>
            <NavLink to="/repairs">Repairs</NavLink>
          </li>
          <li>
            <NavLink to="/reports">Report</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </ul>
      </div>
      <div className="header-right-items">
        {" "}
        <div className="icon-box">
          <MessageIcon />
        </div>
        <div className="icon-box">
          <BellIcon />
        </div>
        <div className="icon-box">
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}
