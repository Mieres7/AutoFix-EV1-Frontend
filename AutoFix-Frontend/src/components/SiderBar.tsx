import { NavLink } from "react-router-dom";
import { HomeIcon, StatsIcon, ToolIcon2, TruckIcon2 } from "../assets/Icons";

export function SideBar() {
  return (
    <nav className="side-bar">
      <header className="side-bar-header">
        <div className="side-bar-logo">{/* <LogoIcon /> */}</div>
        <span>AUTOFIX</span>
      </header>

      <ul className="side-bar-content" id="side-bar-content-id">
        <li>
          <NavLink to="/">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <HomeIcon />
              <span>Home</span>
            </section>
          </NavLink>
        </li>

        <li>
          <NavLink to="/vehicles">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <TruckIcon2 />
              <span>Vehicles</span>
            </section>
          </NavLink>
        </li>
        <li>
          <NavLink to="/repairs">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <ToolIcon2 />
              <span>Repairs</span>
            </section>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <StatsIcon />
              <span>Statistics</span>
            </section>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
