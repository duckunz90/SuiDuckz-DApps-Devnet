import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Mint from "../components/section/mint/v2";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import { ethos } from 'ethos-connect'

const MintPageOne = () => {
  const { visibility, metamaskModal, walletModalvisibility } = ethos.useWallet();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Mint />
      </Layout>
    </>
  );
};

export default MintPageOne;
