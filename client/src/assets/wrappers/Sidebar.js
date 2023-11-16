import styled from "styled-components";

const Wrapper = styled.nav`
  @media (max-width: 786px) {
    .sidebar-container {
      z-index: 1;
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      /* margin-left: -250px; */
      transition: var(--transition);
    }
  }
`;

// const Wrapper = styled.nav`
//   .sidebar {
//     height: 100%;
//     width: 150px;
//     position: relative;
//     left: 0;
//     top: 0;
//     padding-top: 40px;
//     background-color: lightblue;
//   }

//   .sidebar div {
//     padding: 8px;
//     font-size: 24px;
//     display: block;
//   }

//   .body-text {
//     margin-left: 150px;
//     font-size: 18px;
//   }
// `;

export default Wrapper;
