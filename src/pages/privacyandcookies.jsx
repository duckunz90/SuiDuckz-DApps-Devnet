import { ethos } from 'ethos-connect'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import Privacy from "../components/section/privacy/V1"
import Footer from "../components/section/footer/v1";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";
const TermsPage = () => {
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
        <Privacy />
        <Footer />
      </Layout>
    </>
  );
};

export default TermsPage;
