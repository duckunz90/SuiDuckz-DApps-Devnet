import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
import CharacterSlider from "../components/section/characterSlider/v1";
import Team from "../components/section/team/v1";
import FAQ from "../components/section/faq/v1";
import Footer from "../components/section/footer/v1";
import Mint from "../components/section/banner/v2";
import Popup from "../components/section/popup";
import Modal from "../common/modal/popupModal/Modal";
import { ethos } from 'ethos-connect'


const HomeV1 = () => {
  const {
    isPopup,
    popupHandle
  } = ethos.useWallet();
  return (
    <Layout>
      <Modal />
      <GlobalStyles />
      {isPopup && <Popup popupHandle={popupHandle} />}
      <Header />
      <Mint />
      <Banner />
      <CharacterSlider />
      <Team />
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
