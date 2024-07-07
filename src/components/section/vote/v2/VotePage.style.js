// src/components/VotePage.style.js
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    color: 'white',
    marginTop: '20%',
  },
  header: {
    textAlign: 'center',
  },
  projectList: {
    listStyle: 'none',
    padding: 0,
  },
  projectListItem: {
    marginBottom: '10px',
    padding: '10px', // Menambah padding untuk memberi ruang di sekitar elemen
    border: '1px solid white', // Menambah garis batas putih
    borderRadius: '8px', // Menambah sudut elemen
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Mengatur ruang antar tombol
    '& > div > span': {
      marginRight: '10px', // Menambah ruang antara nama proyek dan tombol
    },
  },
  voteButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  radioButtons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
};

const buttonStyles = {
  // Gaya kustom untuk .custom-button
  customButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: '1px solid #3498db',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  customButtonHover: {
    backgroundColor: '#2980b9',
    borderColor: '#2980b9',
  },
};

export { styles, buttonStyles };
