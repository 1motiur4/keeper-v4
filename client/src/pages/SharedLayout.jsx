import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/userSlice";
import Logo from "../assets/keeper-v4-logo.png";
import Menu from "../assets/icons/menu-svgrepo-com.svg";
import Avatar from "../assets/icons/user-avatar-svgrepo-com.svg";

const SharedLayout = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className="top-bg-bar">
        <button
          className="sidebar-button"
          onClick={() => {
            console.log("clicked sidebar button");
            dispatch(toggleSidebar());
          }}
        >
          <img
            src={Menu}
            className="menu-icon"
          />
        </button>
        <div className="logo-container">
          <img
            src={Logo}
            className="logo"
          />
        </div>
        <button>
          <img src={Avatar} className="menu-icon"/>
        </button>
      </div>

      <div className={`sidebar ${isSidebarOpen ? null : "sidebar-closed"}`}>
        <button
          className="sidebar-button right"
          onClick={() => {
            console.log("clicked sidebar button");
            dispatch(toggleSidebar());
          }}
        >
          <img
            src={Menu}
            className="menu-icon"
          />
        </button>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
