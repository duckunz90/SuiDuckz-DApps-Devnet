import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/logo.png";
import { SignInButton, ethos, EthosConnectStatus } from 'ethos-connect';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { status, wallet } = ethos.useWallet();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const handleConnectButtonClick = () => {
    if (wallet && status === EthosConnectStatus.NoConnection) {
      // Buka modal connect jika wallet tidak terkoneksi
      // Contoh: openModal('ConnectWalletModal');
    } else {
      wallet.disconnect();
      navigate('/connect-your-wallet');
    }
  };

  const handleDappsClick = (path) => {
    if (status === EthosConnectStatus.Connected) {
      navigate(path);
    } else {
      navigate('/connect-your-wallet');
    }
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="suiduckz_header" id="navbar">
        <div className="container">
          <div className="suiduckz_menu_sect">
            <div className="suiduckz_menu_left_sect">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="suiduckz nft logo" />
                </a>
              </div>
            </div>
            <div className="suiduckz_menu_right_sect suiduckz_v1_menu_right_sect">
              <div className="suiduckz_menu_list">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="https://app.galxe.com/quest/suiduckz" target="_blank">SuiDuckz Journey</a>
                  </li>
                  <li>
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  {wallet && (
                    <li className="submenu">
                      <a href="# ">Dapps</a>
                      <div className="sub_menu_sect">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <ul className="sub_menu_list">
                                <li>
                                  <a href="#">SuiDuckz Vote (soon)</a>
                                </li>
                                <li>
                                  <a href="#">SuiDuckz Mini Game (soon)</a>
                                </li>
                                <li>
                                  <a onClick={() => handleDappsClick('/suiduckz-story')}>SuiDuckz Story</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <div className="suiduckz_menu_btns">
                <button className="menu_btn" onClick={handleMobileMenu}>
                  <MdNotes />
                </button>
                <a href="https://discord.com/invite/uJJ8kkHKpp" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="join_btn">
                    <FaDiscord /> Join
                  </Button>
                </a>
                <Button size="sm" variant="hovered" className="connect_btn" onClick={handleConnectButtonClick}>
                  <SignInButton className="connect_btn">
                    <FaWallet /> {status}
                  </SignInButton>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
