// CallbackComponent.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mendapatkan nilai 'code' dari URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Kirim 'code' ke server untuk ditukar dengan token akses
    if (code) {
      // Gantilah dengan URL server Anda
      const serverUrl = 'http://localhost:3001/auth/discord/callback';

      // Kirim permintaan ke server
      fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          // Lakukan penanganan sesuai kebutuhan Anda
          console.log('Server Response:', data);

          // Redirect atau lakukan navigasi sesuai kebutuhan
          if (data.allowed) {
            // Redirect ke halaman yang diinginkan setelah login berhasil
            navigate('/home-one');
          } else {
            // Redirect ke halaman yang sesuai dengan kegagalan autentikasi
            navigate('/login');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error, misalnya, redirect ke halaman error
          navigate('/error');
        });
    } else {
      // Handle jika 'code' tidak ditemukan
      console.error('Authorization code not found.');
      // Redirect atau lakukan navigasi sesuai kebutuhan
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Callback Component</h2>
      {/* Isi komponen sesuai kebutuhan Anda */}
    </div>
  );
};

export default CallbackComponent;
