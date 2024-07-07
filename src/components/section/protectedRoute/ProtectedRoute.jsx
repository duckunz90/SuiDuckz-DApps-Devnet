import React from 'react';
import { Navigate } from 'react-router-dom';
import { ethos, EthosConnectStatus } from 'ethos-connect';

const ProtectedRoute = ({ children }) => {
  const { status } = ethos.useWallet();
  const isConnected = status === EthosConnectStatus.Connected;

  if (!isConnected) {
    return <Navigate to="/connect-your-wallet" />;
  }

  return children;
};

export default ProtectedRoute;
