// Modal.style.js
import styled from 'styled-components';
import bg from '../../../assets/images/bg/modal-bg.jpg';

export const ModalContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow-y: auto; /* Memungkinkan scroll jika konten lebih tinggi dari tinggi modal */

  /* Gaya untuk scrollbar */
  ::-webkit-scrollbar {
    width: 10px; /* Lebar scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #51bef6; /* Warna latar belakang scrollbar */
    border-radius: 4px; /* Bentuk ujung scrollbar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: yellow; /* Warna latar belakang scrollbar saat dihover */
  }
`;

export const ModalContent = styled.div`
  background: url(${bg});
  background-size: cover; /* Menyesuaikan latar belakang agar mencakup seluruh area */
  background-position: center; /* Posisi latar belakang di tengah */
  padding: 20px;
  border-radius: 10px 0px;
  position: relative;
  width: 80%; /* Lebar modal dapat disesuaikan sesuai kebutuhan */
  max-width: 500px; /* Lebar maksimum untuk tampilan yang lebih baik pada perangkat besar */
  max-height: 70vh; /* Tinggi maksimum modal untuk mencegah terlalu panjang di perangkat kecil */
  overflow-y: auto; /* Memungkinkan scroll jika konten lebih tinggi dari tinggi modal */
  justift-content: center;

  /* Gaya untuk mengubah warna scrollbar saat discroll */
  ::-webkit-scrollbar-thumb:vertical {
    background-color: rgba(0, 0, 0, 0.6); /* Warna latar belakang scrollbar saat discroll */
  }

  /* Media query untuk perangkat mobile */
  @media screen and (max-width: 768px) {
    width: 90%; /* Mengubah lebar modal untuk perangkat mobile */
    max-width: none; /* Hilangkan batas maksimum lebar untuk perangkat mobile */
  }


  .modal-container-body {


    h2 {
        color: white;
        text-shadow: 4px 1px 3px rgba(0, 0, 0, 3.5);
    }

    p {
        color : white;  
        padding-top: 20px;
        text-shadow: 1px 4px 3px rgba(0, 0, 0, 3.5);
    }

    li {
        color : white;  
        padding-top: 20px;
        text-shadow: 1px 4px 3px rgba(0, 0, 0, 3.5);
    }

    a {
        color : yellow;
    }

  }

`;

export const AgreeButton = styled.button`
  padding: 10px 20px;
  background-color: #51bef6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0px 40%;
  display: ${props => (props.checked ? 'inline-block' : 'none')};

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 50px;
  color: red;
  
`;

export const ModalShow = styled.div`
  display: flex;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const ModalHide = styled.div`
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: yellow;
  font-size: 18px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;
