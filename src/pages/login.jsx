import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Banner from "../components/section/login/v4";
import Popup from "../components/section/popup";
import { ethos } from 'ethos-connect'


const HomeV1 = () => {
  const {
    isPopup,
    popupHandle
  } = ethos.useWallet();
  return (
    <Layout>
      <GlobalStyles />
      {isPopup && <Popup popupHandle={popupHandle} />}
      <Banner />
    </Layout>
  );
};

export default HomeV1;
