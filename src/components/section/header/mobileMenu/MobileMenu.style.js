import styled, { keyframes } from "styled-components";
import { slideInLeft, slideInRight } from "react-animations";

const menuAnimation = keyframes`${slideInRight}`;
const subMenuAnimation = keyframes`${slideInLeft}`;

const MobileMenuStyleWrapper = styled.div`
  &.suiduckz_mobile_menu {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 12;
    width: 100%;
    height: auto;
    transition: 0.4s;
    opacity: 1;
    display: block;

    &::before {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      background: rgba(4, 12, 18, 0.9);
      content: "";
      z-index: -1;
    }
  }

  .suiduckz_mobile_menu_content {
    background: #000000;
    height: 100vh;
    width: 500px;
    padding: 50px;
    padding-top: 100px;
    margin-left: auto;
    animation: 1s ${menuAnimation};
    overflow-y: scroll;
  }

  .mobile_menu_logo {
    width: 100%;
    position: relative;
  }

  .mobile_menu_close_btn {
    position: absolute;
    right: 0px;
    top: 50%;
    background: none;
    border: none;
    outline: none;
    transform: translateY(-50%);
    
    svg {
      color: #ffffff;
      font-size: 24px;
    }
  }

  .suiduckz_mobile_menu_list {
    margin-top: 50px;
    ul {
      margin: 0;
      padding: 0;

      li {
        height: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        a, button.link-button {
          font-family: "Bakbak One";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          text-transform: uppercase;
          color: #ffffff;
          width: 100%;
          transition: all 0.4s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          text-decoration: none;
          &:hover {
            color: #51bef6;
          }
        }

        .mobile_sub_menu_list {
          position: absolute;
          left: 0px;
          top: 35px;
          width: 100%;
          background: transparent;
          z-index: 3;
          transition: all 0.7s;
          visibility: hidden;
          opacity: 0;

          &.submenu_open {
            visibility: visible;
            opacity: 1;
          }

          li {
            padding: 0px 25px;
            a, button.link-button {
              &:hover {
                color: #51bef6;
              }
            }
          }
        }
      }
    }
  }

  .mobile_menu_social_links {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    margin-top: 30px;
    svg {
      font-size: 20px;
      color: #fff;
    }
  }

  .connect_btn {
    width: 100%;
    margin-top: 150px;
    border-style: groove;
    border-color: rgba(184, 184, 184, 0.527);
    margin-left: 20px;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    svg {
      font-size: 20px;
    }
  }

  .connect_btn2 {
    width: 100%;
    border-color: rgba(184, 184, 184, 0.527);
    margin-left: 20px;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    padding: 20px 20px;
    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .suiduckz_mobile_menu_content {
      width: 100%;
    }
  }
`;

export default MobileMenuStyleWrapper;
