import styled from 'styled-components';

const ChapterListStyleWrapper = styled.div`
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it is above other content */
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
  }

  .popup-inner {
    position: relative;
    background-color: transparent;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
  }

  .close-btn {
    color: red;
    position: relative;
    top : -10px;
    right: 6px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .chapter-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 3px solid #ccc;
  }

  .chapter-title {
    font-weight: bold;
    cursor: pointer;
    align-items: flex-start;
    margin-right: 100px;  // Ensures the chapter title is aligned to the left
    color: #ffffff;
        
      &:hover {
          color: #51bef6;
        }
  }

  .chapter-date {
    color: #888;
    margin-left: 100px;  // Ensures the chapter date is aligned to the right

  }

  .divider {
    margin-top: 10px;
    border: none;
    border-top: 1px solid #ccc;
  }
`;

export default ChapterListStyleWrapper;
