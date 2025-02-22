import styled from "styled-components";

const TeamMemberStyleWrapper = styled.article`
  .suiduckz_team_card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    max-width: 100%;
    height: 380px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(81, 190, 246, 0.5); 
    }
  
    h3 {
      color: #ffffff;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 14px;
    }

    h4 {
      font-family: "Inter";
      font-style: normal;
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
    }
  }

  .team_social_icon {
    width: 100%;
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 197px;
      width: 100%;
      margin: 0;
      padding: 0;

      li {
        height: 25px;
        width: 37px;
        background: transparent;
        opacity: 0;
        transition: 0.4s;
        a {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          width: 100%;
          color: #ffffff;
          img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }

  .hover_shape {
    position: absolute;
    top: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    &.hov_shape1 {
      left: 10px;
    }

    &.hov_shape2 {
      right: 10px;
      transform: rotate(90deg);
    }
  }

  &:hover {
    .hover_shape {
      opacity: 1;
      visibility: visible;
    }

    &:hover {
      .team_social_icon {
        ul {
          li {
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .suiduckz_team_card {
      h3 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
`;

export default TeamMemberStyleWrapper;
