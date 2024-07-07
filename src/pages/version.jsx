import { ethos } from 'ethos-connect'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import Footer from "../components/section/footer/v1";
import Doc from "../components/section/version/v1/Doc.jsx";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";


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
        <Header />
        <Doc />
        <Footer />
      </Layout>
    </>
  );
};

export default Version;
