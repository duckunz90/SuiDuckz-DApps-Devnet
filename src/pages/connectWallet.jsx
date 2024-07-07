import { ethos } from 'ethos-connect'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";
import ConnectWallet from '../components/section/connectWallet/ConnectWallet';


const Version = () => {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
  ethos.useWallet();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {isPopup && <Popup popupHandle={popupHandle} />}
        {walletModalvisibility && <WalletModal />}
        <ConnectWallet />
      </Layout>
    </>
  );
};

export default Version;
