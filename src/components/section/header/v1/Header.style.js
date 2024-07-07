import styled from "styled-components";

const NavWrapper = styled.nav`
  z-index: 999;
  &.suiduckz_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 998;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }
  

  .suiduckz_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .suiduckz_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    .logo {
      a {
        display: inline-block;
        
      }
    }
  }

  .suiduckz_menu_right_sect {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .suiduckz_menu_list {
    margin-left: 65px;
    margin-right: 150px;
    max-width: 514px;
    min-width: 409px;
    width: 100%;
    
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      
      li {
        position: relative;
        cursor: pointer;
        
        a {
          font-family: "Bakbak One";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          a {
            color: #51bef6;
          }
        }

        /* submenu */
        &.submenu {
          .sub_menu_sect {
            // background: transparent;
            background: #171f25;
            // border-top: 50px solid transparent;
            position: absolute;
            top: calc(100% + 20px);
            left: -20px;
            width: 400px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;
            transform: translateY(20px);

            .sub_menu_list {
              padding: 15px 20px;
              // background: #171f25;
              flex-wrap: wrap;
              li {
                width: 100%;
                a {
                  font-family: "Bakbak One";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
                }

                &:hover {
                  a {
                    color: #51bef6;
                  }
                }
              }
            }
          }

          &:hover {
            .sub_menu_sect {
              transform: translateY(0px);
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }

  .suiduckz_menu_btns {
    display: flex;
    align-items: center;
    justify-content: end;
    min-width: 284px;
    padding-left: 20%;
    button {
      color: #ffffff;
      text-transform: uppercase;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
    }

    .connect_btn {
      height: 50px;
      width: 160px;
      margin-left: 20px;
      background: transparent;
      border-color : rgba(233, 231, 231, 0.29);
      border-style: solid;

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1199px) {
    .suiduckz_menu_list {
      margin-left: 50px;
      margin-right: 50px;
      max-width: 514px;
      min-width: 499px;
      width: 100%;
    }

    .suiduckz_menu_btns {
      display: flex;
      align-items: center;
      justify-content: end;
      min-width: 284px;
      padding-left: 5px;
      button {
        color: #ffffff;
        text-transform: uppercase;
        font-family: "Bakbak One";
        font-weight: 400;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1025px) {
    .suiduckz_menu_list {
      margin-right: 40px;
      max-width: 414px;
      min-width: 499px;
      width: 100%;
      
    }

    .suiduckz_menu_btns {
      display: flex;
      align-items: center;
      justify-content: end;
      min-width: 284px;
      padding-left: 1%;
      button {
        color: #ffffff;
        text-transform: uppercase;
        font-family: "Bakbak One";
        font-weight: 400;
        font-size: 16px;
      }
  
      .menu_btn {
        display: none;
        border: none;
        background: transparent;
        cursor: pointer;
        svg {
          font-size: 40px;
        }
      }
  
      .join_btn {
        height: 50px;
        width: 114px;
        background-color: transparent;
      }
  
      .connect_btn {
        height: 50px;
        width: 170px;
        margin-left: 10px;
        background: transparent;
        border-color : rgba(233, 231, 231, 0.29);
        border-style: solid;
  
        svg {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .suiduckz_menu_right_sect {
      justify-content: end;
    }
    .suiduckz_menu_btns {
      
      justify-content: end;
      
      .menu_btn {
        display: block;
      }
    }

    .suiduckz_menu_btns {

      .join_btn {
        display: none;
      }
      .connect_btn {
        display: none;
      }
    }
    .suiduckz_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  
  @media (max-width: 991px) {
    .suiduckz_menu_right_sect {
      justify-content: end;
    }
    .suiduckz_menu_btns {
      
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .suiduckz_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .suiduckz_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .suiduckz_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .suiduckz_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .suiduckz_menu_right_sect {
      width: 50%;
      .suiduckz_menu_right_sect {
        width: 50%;
      }
    }
  }
`;

export default NavWrapper;
