import styled from 'styled-components';

export const CustomizePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 200px; /* Ubah padding untuk tablet */
  }

  @media screen and (min-width: 1200px) {
    padding-top: 450px; /* Ubah padding untuk desktop */
  }
`;

export const Canvas = styled.div`
  border: 2px solid #ccc;
  padding: 90px;
  margin-bottom: 20px;
  width: 50%;
  
  img {
    max-width: 100%;
    max-height: 100%;
    z-index : 999;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Mengubah menjadi kolom pada mode mobile dan tablet */
  align-items: center;
  width: 50%;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Kembali ke baris pada mode tablet dan desktop */
    justify-content: center;
    
  }
`;

export const AssetPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Memberikan jarak antar panel pada mode mobile */

  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;

    &.selected {
      background-color: #2c3e50;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0; /* Hapus jarak antar panel pada mode tablet dan desktop */
  }
`;

export const ArrowButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-left: 10px; /* Berikan margin pada mode tablet dan desktop */
  }
`;
