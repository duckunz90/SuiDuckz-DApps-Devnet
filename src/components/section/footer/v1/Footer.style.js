import styled from "styled-components";
import footerBG from "../../../../assets/images/bg/v1_footer_bg.png";

const FooterStyleWrapper = styled.footer`
  background: url(${footerBG});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .suiduckz_v1_main_footer {
    position: relative;
    min-height: 400px;
    width: 100%;

    .suiduckz_v1_main_footer_overlay {
      background: linear-gradient(
        180deg,
        rgba(4, 15, 21, 0) 0%,
        rgba(4, 14, 20, 0.270833) 50.52%,
        #040c12 100%
      );
      height: 100%;
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }

    .three_charectre_img {
      text-align: center;
    }

    /* footer bottom */
    .footer_bottom {
      position: absolute;
      bottom: 0px;
      width: 100%;
      min-height: 100px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
    }

    .footer_bottom_content {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer_shapes_left {
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      z-index: 0;
    }
    .footer_shapes_right {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      z-index: 0;
    }
    .footer_menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
      position: relative;
      z-index: 1;
    }
    .bottom_footer_left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;

      .copiright_text {
        p {
          margin: 0 0 0 40px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          margin-bottom: 0;
        }
        .version a{
          font-weight: 500;
          color: #0e9bc5;
        }
      }
    }
    .bact_to_top_btn {
      background: transparent;
      border: none;
      outline: none;
    }

    .bottom_footer_right {
      max-width: 394px;
      width: 100%;
      p {
        font-weight: 500;
        margin-bottom: 0;
        margin: 0 0 0 100px;
        
      }

      a {
        color: #0e9bc5;
      }
    }

  }
  
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .suiduckz_v1_main_footer {
      .bottom_footer_right {
        ul {
          justify-content: right;
        }
      }
      .bottom_footer_left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
  
        .copiright_text {
          p {
            margin: 0 0 0 10px;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 500;
            margin-bottom: 0;
            font-size: 12px;
          }
          .version a{
            font-weight: 500;
            margin: 0 0 0 0px;
            font-size: 12px;
            color: #0e9bc5;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .suiduckz_v1_main_footer {
      .bottom_footer_right {
        ul {
          li + li {
            padding-left: 20px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .suiduckz_v1_main_footer {
      .bottom_footer_right {
        ul {
          justify-content: right;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .suiduckz_v1_main_footer {
      .bottom_footer_left {
        .copiright_text {
          p {
            margin: 0 0 0 10px;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 500;
            margin-bottom: 0;
            font-size: 12px;
          }
          .version a{
            font-weight: 500;
            margin: 0 0 0 0px;
            font-size: 10px;
            color: #52b2cf;
          }
        }

        .footer_logo img{
          max-width: 100px;
          margin: 0 0 0 0;
        }
      }

      .bottom_footer_right {
        max-width: 300px;
        text-align: center;
        
        p a{
          color: #0e9bc5;

        }
        .disclaimer-text a{
          font-weight: 500;
          color: #0e9bc5;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .suiduckz_v1_main_footer {
      .footer_bottom {
        min-height: 140px;
      }
      .footer_menu {
        padding: 20px 0px;
        flex-direction: column-reverse;
        padding-bottom: 40px;
      }

      .footer_shapes_left,
      .footer_shapes_right {
        display: none;
      }

      .bact_to_top_btn {
        position: absolute;
        bottom: 10px;
        margin-left: 15px;
      }
      .bottom_footer_right {
        margin: 10px auto 10px auto;
        
        p {
          font-weight: 500;
          margin-bottom: 0;
          margin: 0 0 0 0;
          color: #0e9bc5;
        }
      }
      .bottom_footer_left {
        display: block;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
  
        .copiright_text {
          p {
            margin: 0 0 0 10px;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 500;
            margin-bottom: 0;
            font-size: 12px;
          }
          .version a {
            font-weight: 500;
            margin: 0 0 0 90px;
            color: #52b2cf;
          }
        }
        .footer_logo {
          position: relative;
          margin-left: 100px;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .suiduckz_v1_main_footer {
      .bottom_footer_left {
        .copiright_text {
          margin-left: 26px;
        }
      }

      .footer_menu {
        row-gap: 12px;
      }
    }
  }
`;

export default FooterStyleWrapper;
