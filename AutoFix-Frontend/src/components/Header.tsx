import { BellIcon, MessageIcon, ProfileIcon } from "../assets/Icons";

export function Header() {
  return (
    <nav className="header">
      <div className="header-left-items">
        <span>Welcome to AutoFix</span>
        Maintenance & Repairs
      </div>
      <div className="header-right-items">
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
