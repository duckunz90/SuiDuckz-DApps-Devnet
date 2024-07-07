import SectionTitle from "../../../../common/sectionTitle";
import aboutImageLeft from "../../../../assets/images/nft/about_image_left2.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./Terms.style";

const Terms = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="Terms and Conditions"
        />
        <div className="v2_about_us_content">
        <div class="v2_about_us_text">
    <p><strong>1. Ownership and Rights</strong></p>
    <p>By purchasing NFT Products created by SuiDuckz, you acknowledge that you are acquiring a limited, non-transferable, and non-exclusive ownership right to the digital content represented by the NFT on the Sui Blockchain.</p>

    <p><strong>2. Intellectual Property</strong></p>
    <p>All intellectual property rights associated with NFT Products created by SuiDuckz, including but not limited to images, designs, and underlying code, are the sole property of SuiDuckz. Users agree not to reproduce, distribute, or create derivative works without explicit permission.</p>

    <p><strong>3. Blockchain Transactions</strong></p>
    <p>All transactions involving NFT Products created by SuiDuckz are irreversible and recorded on the Sui Blockchain. Users are responsible for ensuring the accuracy of transaction details, and SuiDuckz is not liable for any errors or losses.</p>

    <p><strong>4. Use and Display</strong></p>
    <p>Owners of NFT Products created by SuiDuckz have the right to display and showcase their NFTs for personal, non-commercial use. Any commercial use, public display, or reproduction requires explicit permission from SuiDuckz.</p>

    <p><strong>5. Prohibited Activities</strong></p>
    <p>Users agree not to engage in any illegal or harmful activities related to NFT Products created by SuiDuckz, including but not limited to fraud, hacking, or any actions that may compromise the integrity of the Sui Blockchain.</p>

    <p><strong>6. Community Guidelines</strong></p>
    <p>Users are expected to adhere to community guidelines and respect other members of the NFT Products created by SuiDuckz community. Any form of harassment, discrimination, or inappropriate behavior will result in immediate suspension or termination of NFT ownership.</p>

    <p><strong>7. Disclaimer of Warranty</strong></p>
    <p>NFT Products created by SuiDuckz are provided "as is" without any warranties. SuiDuckz makes no guarantees regarding the quality, functionality, or availability of the NFTs. Users acknowledge and accept the inherent risks associated with blockchain technology.</p>

    <p><strong>8. Modification of Terms</strong></p>
    <p>SuiDuckz reserves the right to modify these terms and conditions at any time. Users will be notified of significant changes, and continued use of NFT Products created by SuiDuckz implies acceptance of the updated terms.</p>

    <p><strong>9. Governing Law</strong></p>
    <p>These terms and conditions are governed by the laws of [insert relevant jurisdiction]. Any disputes arising from or related to NFT Products created by SuiDuckz will be resolved through arbitration in accordance with the rules of [insert relevant arbitration organization].</p>

    <p><strong>10. Devnet Mode</strong></p>
    <p>When accessing suiduckz.com for the purpose of using dapps or engaging in transactions, users acknowledge that they are operating on the developer network. It is important to understand and agree to the terms of use before conducting any transactions or interacting with dapps. By accessing and utilizing suiduckz.com, users accept any associated risks and agree to abide by the terms outlined in the terms of use agreement.</p>

    <p>By purchasing and owning NFT Products created by SuiDuckz, users agree to abide by these terms and conditions. Failure to comply may result in the revocation of ownership and other appropriate actions by SuiDuckz.</p>
  </div>

          <div className="v2_about_img v2_about_img_left">
            <span>
              <img src={aboutImageLeft} alt="Suiduckz" />
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              <img src={aboutImageRight} alt="Suiduckz" />
            </span>
          </div>
        </div>

        {/* about card */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default Terms;
