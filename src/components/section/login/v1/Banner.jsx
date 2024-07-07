import React, { useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';
import Button from '../../../../common/buttonLogin';
import BannerV1Wrapper from './Banner.style';
import characterThumb from '../../../../assets/images/nft/Character1.png';
import axios from 'axios';

const Banner = () => {
  const discordClientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
  const discordRedirectUrl = import.meta.env.VITE_DISCORD_REDIRECT_URL;

  const handleDiscordLogin = () => {
    const discordOAuthUrl = `https://discord.com/oauth2/authorize?client_id=${discordClientId}&response_type=code&redirect_uri=${encodeURIComponent(discordRedirectUrl)}&scope=identify+guilds`; 

    window.location.href = discordOAuthUrl;
  };

  const handleServerVerification = async (code) => {
    try {
      const response = await axios.post('http://localhost:3000/', {
        code,
      });
  
      if (response.data.allowed) {
        // Lakukan sesuatu setelah pengguna diizinkan, misalnya, redirect atau set state.
        console.log('User allowed:', response.data);
      } else {
        console.error('Access denied:', response.data.error);
        // Handle akses ditolak, tampilkan pesan kesalahan, dll.
      }
    } catch (error) {
      console.error('Error during server verification:', error);
  
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: User access denied');
        // Handle akses ditolak, misalnya, redirect ke halaman login.
        window.location.href = 'http://localhost:3000'; // Ubah sesuai kebutuhan Anda
      } else {
        console.error('Internal Server Error:', error);
        // Handle error lainnya, tampilkan pesan kesalahan, dll.
      }
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (code) {
      handleServerVerification(code);
    } else if (error && error === 'access_denied') {
      // Handle pembatalan otorisasi, misalnya, redirect ke halaman login.
      window.location.href = '/login';
    }
  }, []);

  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="suiduckz_v1_baner_left">
              <h2>Welcome Duckz Hunter</h2>
              <div className="banner_buttons">
                <Button size="lg" variant="mint" onClick={handleDiscordLogin}>
                  <FaDiscord /> Login Now
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="suiduckz_v1_baner_right">
              <div className="suiduckz_v1_baner_right_img_sect">
                <div className="suiduckz_v1_baner_right_img_bg"></div>
                <div className="suiduckz_v1_baner_right_img">
                  <img src={characterThumb} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
