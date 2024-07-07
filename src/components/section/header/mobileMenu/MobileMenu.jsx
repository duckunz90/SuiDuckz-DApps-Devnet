import React, { useState, useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import Button from "../../../../common/button";
import { SignInButton, ethos, EthosConnectStatus } from 'ethos-connect';
import MobileMenuStyleWrapper from "./MobileMenu.style";
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ mobileMenuhandle }) => {
  const { status, wallet } = ethos.useWallet();
  const [connectionStatus, setConnectionStatus] = useState(status);
  const [isSubmenu, setSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  const handleConnectButtonClick = () => {
    if (wallet && connectionStatus === EthosConnectStatus.NoConnection) {
      // Wallet is already connected, you can add logic here if needed
    } else {
      wallet.disconnect();
      // openModal('ConnectWalletModal');
    }
  };

  const handleDappsClick = (path) => {
    if (connectionStatus === EthosConnectStatus.Connected) {
      navigate(path);
    } else {
      navigate('/connect-your-wallet');
    }
  };

  useEffect(() => {
    setConnectionStatus(status);
  }, [status]);

  return (
    <MobileMenuStyleWrapper className="suiduckz_mobile_menu">
      <div className="suiduckz_mobile_menu_content">
        <div className="mobile_menu_logo">
          {/* Logo could go here */}
        </div>
        <div className="suiduckz_mobile_menu_list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://app.galxe.com/quest/suiduckz" target="_blank" rel="noopener noreferrer">SuiDuckz Journey</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {wallet && (
              <li className="submenu mobile_submenu" onClick={handleSubmenu}>
                <a href="# ">Dapps</a>
                <ul className={`sub_menu_list mobile_sub_menu_list ${isSubmenu ? "submenu_open" : ""}`}>
                  <li>
                    <a href="#">SuiDuckz Vote (soon)</a>
                  </li>
                  <li>
                    <a href="#">SuiDuckz Mini Game (soon)</a>
                  </li>
                  <li>
                    <button onClick={() => handleDappsClick('/suiduckz-story')} className="link-button">SuiDuckz Story</button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        <Button size="sm" variant="hovered" className="connect_btn" onClick={handleConnectButtonClick}>
          <SignInButton className="connect_btn2">
            <FaWallet />{status}
          </SignInButton>
        </Button>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
