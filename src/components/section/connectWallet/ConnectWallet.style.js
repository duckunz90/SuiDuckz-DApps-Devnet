import styled from 'styled-components';
import sectionBgImage from "../../../assets/images/bg/suiduckz_not_connected.png";




export const ConnectWalletContainer = styled.div`
  
  background: url(${sectionBgImage}) no-repeat center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

export const ConnectWalletMessage = styled.p`
  font-size: 18px;
  color: #333;
`;
