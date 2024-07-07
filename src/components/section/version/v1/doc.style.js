import styled from 'styled-components';
import aboutBg from "../../../../assets/images/bg/background.jpeg"



export const DocContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 100px 20px;
  background: url(${aboutBg});
  
  h1 {
    color : #51bef6;
  }
  

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  
  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      color : white;
      ul {
        text-align: center;
        padding: 8px;
      }
    }

    th {
      background-color: #51bef6;
    }

    tr:hover {
      background-color: #2cb0f4;
    }
  }

  @media (max-width: 768px) {
    margin: 80px auto;

    table {
      th, td {
        padding: 6px;
      }
    }
  }
`;
