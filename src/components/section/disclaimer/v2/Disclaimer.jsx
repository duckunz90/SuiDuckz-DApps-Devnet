import SectionTitle from "../../../../common/sectionTitle";
import aboutImageLeft from "../../../../assets/images/nft/about_image_left2.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./Disclaimer.style";

const Disclaimer = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="Disclaimer"
        />
        <div className="v2_about_us_content">
      <div className="v2_about_us_text">
        <ul>
            <p>
            We don't force people to buy our NFT, but a project will be successful if the community is solid. All Forms of buying and selling risk in an NFT market are your own responsibility. DYOR
            </p>
        </ul>
        <section className="modal-container-body">
          <ul>
            <h2>Disclaimer for Devnet.suiduckz.com</h2>
              <p>
              <a href="Devnet.suiduckz.com">Devnet.suiduckz.com</a> is a testing environment provided by Suiduckz as part of a Trial or Test and development program.
              By using this service, you agree to understand and consent to the following terms.
              </p>
            <li>
            <strong>Testing and Development:</strong> This website is intended for testing and development purposes.
             Activities within may not reflect production conditions and are subject to change without notice.
            </li>
          <li>
            <strong>Use of Specially Designated Trial or Test Sui Wallet:</strong> It is advised that testers use the Sui wallet specifically provided for this Trial or Test.
            We are not responsible for any losses or issues that may arise from the use of non-Trial or Test Sui wallets.
          </li>
          <li>
            <strong>Disclaimer of Liability:</strong> Suiduckz and related parties are not liable for financial losses,
            data loss, or any other issues that may arise during or after the Trial or Test.
          </li>
          <li>
            <strong>Changes and Updates:</strong> Suiduckz reserves the right to make changes or updates to the <a href="Devnet.suiduckz.com">Devnet.suiduckz.com</a> website without prior notice.
          </li>
          <li>
            <strong>Privacy and Security:</strong> While security measures have been implemented, users are expected to understand
            the privacy and security risks associated with the Trial or Test.
          </li>
          <li>
            <strong>Do your own research:</strong> Users are encouraged to conduct independent research and evaluation before further involvement.
            Decisions based on information from this Trial or Test are the sole responsibility of the user.
          </li>
        <p>
          By using the <a href="Devnet.suiduckz.com">Devnet.suiduckz.com</a> service, you acknowledge that you have read, understood, and agreed to the above terms
          and are willing to conduct independent research. Any risks that may arise during the use of this service are the user's responsibility.
          If you have any questions or concerns, please contact the Suiduckz team.
        </p>
        </ul>
        </section>
      </div>
          <div className="v2_about_img v2_about_img_left">
            <span>
              <img src={aboutImageLeft} alt="suiduckz nft about" />
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              <img src={aboutImageRight} alt="suiduckz nft thumb" />
            </span>
          </div>
        </div>

        {/* about card */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default Disclaimer;
