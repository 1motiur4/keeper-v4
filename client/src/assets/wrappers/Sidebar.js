import styled from "styled-components";

const Wrapper = styled.nav`
  @media (width <= 786px) {
    .logo {
      width: 65vw;
      max-width: 400px;
      height: auto;
    }

    .logo-container {
      margin: auto;
    }

    .top-bg-bar {
      /* text-align: center; */
      display: flex;
      width: 100%vw;
      height: auto;
      background-color: #dcd3ff;
      z-index: 1;
    }

    .sidebar {
      height: 100%;
      overflow: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: white;
      min-width: 250px;
      width: 50%;
      box-shadow: 2px 0 4px rgba(0, 0, 0, 0.5);
      transition: 0.3s ease-in-out all;
      padding: 20px;
    }

    .sidebar-closed {
      min-width: 0;
      width: 0;
      padding: 0px;
    }

    /* .sidebar-button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      outline: none;
      background: black;
      margin: 20px;
      cursor: pointer;
    } */

    .sidebar-button {
      background-color: transparent;
      width: auto;
      height: auto;
    }

    .right {
      float: right;
    }

    .menu-icon {
      width: 50px;
      height: 50px;
      outline: none;
      background-color: transparent;
    }
  }
`;

export default Wrapper;
