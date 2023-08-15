import sidebarStyle from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={sidebarStyle.sidebar}>
      <nav className={sidebarStyle.navigation}>
        <ul className={sidebarStyle.menu}>
          <li className={sidebarStyle.item}>Profile</li>
          <li className={sidebarStyle.item}>News</li>
          <li className={sidebarStyle.item}>Messages</li>
          <li className={sidebarStyle.item}>Music</li>
          <li className={sidebarStyle.item}>Friends</li>
          <li className={sidebarStyle.item}>Settings</li>
        </ul>
      </nav>
    </div>
  );
};
