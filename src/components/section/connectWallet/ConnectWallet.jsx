import React from 'react';
import { ConnectWalletContainer, ConnectWalletMessage } from './ConnectWallet.style';

const ConnectWallet = () => {
  return (
    <ConnectWalletContainer>
      <h1>Connect Your Wallet</h1>
      <ConnectWalletMessage>
        To access the SuiDuckz Story page, you need to connect your wallet first.
        <p>Visit <a href="https://devnet.suiduckz.com">devnet.suiduckz.com</a> and connect your sui wallet</p>
      </ConnectWalletMessage>
    </ConnectWalletContainer>
  );
};

export default ConnectWallet;
