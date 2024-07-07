import { ethos } from 'ethos-connect'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import Custom from "../components/section/customizer";
import Footer from "../components/section/footer/v1";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
const CustomizePages = () => {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
  ethos.useWallet();
  return (
    <>
      <Layout>
        <GlobalStyles />
        {isPopup && <Popup popupHandle={popupHandle} />}
        {metamaskModal && <MetamaskModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Custom />
        <Footer />
      </Layout>
    </>
  );
};

export default CustomizePages;
