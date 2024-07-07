import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1";
import Vote from "../components/section/vote/v2";
import Popup from "../components/section/popup";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import { ethos } from 'ethos-connect'

const VotePage = () => {
  const {
    visibility,
   
    walletModalvisibility,
    isPopup,
    popupHandle,
  } = ethos.useWallet();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {isPopup && <Popup popupHandle={popupHandle} />}
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Vote />
      </Layout>
    </>
  );
};

export default VotePage;
