import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Sidebar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
