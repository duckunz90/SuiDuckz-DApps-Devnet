import SectionTitle from "../../../../common/sectionTitle";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./Privacy.style";

const Privacy = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="Privacy Policy and Cookie Statement"
        />
        <div className="v2_about_us_content">
        <div class="v2_about_us_text">
    <p><strong>Privacy Policy: </strong></p>
    <p><strong>1. Collection of Personal Information: SuiDuckz may collect personal information from users, including but not limited to name, email address, and transaction details, for the purpose of providing and improving services related to NFT Products created by SuiDuckz.</strong></p>

    <p><strong>2. Use of Personal Information: Personal information collected by SuiDuckz may be used for transaction processing, account management, communication with users, and improving the overall user experience. SuiDuckz may also use aggregated data for analytical purposes.</strong></p>

    <p><strong>3. Protection of Personal Information: SuiDuckz takes measures to protect the personal information of users from unauthorized access, disclosure, alteration, or destruction. However, users acknowledge that no method of transmission over the internet or electronic storage is 100% secure.</strong></p>


    <p><strong>4. Third-Party Disclosure: SuiDuckz may disclose personal information to third-party service providers for the purpose of providing services related to NFT Products created by SuiDuckz, such as transaction processing and analytics. SuiDuckz will ensure that third-party service providers adhere to appropriate privacy and security standards.</strong></p>


    <p><strong>5. User Rights: Users have the right to access, update, or delete their personal information held by SuiDuckz. Users may also have the right to restrict or object to the processing of their personal information.</strong></p>

    <p><strong>6. Retention of Personal Information: SuiDuckz will retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</strong></p>

    <p><strong>7. Updates to Privacy Policy: SuiDuckz reserves the right to update this Privacy Policy at any time. Users will be notified of significant changes, and continued use of NFT Products created by SuiDuckz implies acceptance of the updated Privacy Policy.</strong></p>


    <p><strong>Cookie Statement:</strong></p>

    <p><strong>1. Use of Cookies: SuiDuckz may use cookies and similar tracking technologies to enhance the user experience and collect information about user preferences and interactions with the SuiDuckz website, Dapps, and platform.</strong></p>

    <p><strong>2. Types of Cookies: SuiDuckz may use session cookies, which are temporary and expire when the user closes the browser, as well as persistent cookies, which remain on the user's device for a longer period of time. SuiDuckz may also use third-party cookies for analytics and advertising purposes.</strong></p>

    <p><strong>3. User Consent: By accessing the SuiDuckz website, Dapps, and platform, users consent to the use of cookies as described in this Cookie Statement. Users may also have the option to manage cookie preferences through their browser settings.</strong></p>

    <p><strong>4. Opt-Out: Users may opt out of the use of cookies by adjusting their browser settings or using opt-out mechanisms provided by third-party service providers. However, opting out of certain cookies may impact the functionality of the SuiDuckz website, Dapps, and platform.</strong></p>

    <p><strong>5. Updates to Cookie Statement: SuiDuckz reserves the right to update this Cookie Statement at any time. Users will be notified of significant changes, and continued use of the SuiDuckz website, Dapps, and platform implies acceptance of the updated Cookie Statement.</strong></p>

    <p><strong>By using the SuiDuckz website, Dapps, or Platform, users agree to abide by the terms outlined in both the Privacy Policy and Cookie Statement.</strong></p>
  </div>

        </div>

        {/* about card */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default Privacy;
