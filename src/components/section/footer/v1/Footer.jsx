import { useState } from "react";
import CTA from "../../cta/v1";


import footerLogo from "../../../../assets/images/logo.png";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";

import characterShape from "../../../../assets/images/nft/3_chr_img.png";

import FooterStyleWrapper from "./Footer.style";

const Footer = () => {
  const [copyrightYear, setCopyrightYear] = useState(new Date());

  return (
    <FooterStyleWrapper>
      <CTA />

      <div className="suiduckz_v1_main_footer">
        <div className="suiduckz_v1_main_footer_overlay"></div>
        <div className="three_charectre_img">
          <img src={characterShape} alt="suiduckz nft character" />
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_content">

            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="footer_logo">
                    
                      <img src={footerLogo} alt="SuiDuckz nft logo" />
                    
                  </div>
                  <div className="copiright_text">
                    <p>Copyright &copy; {copyrightYear.getFullYear()} SuiDuckz All Right Reserved</p>
                    <p className="version"><a href="/version" target="_blank"><u>Alpha version 1.2.1</u></a></p>
                  </div>
                </div>
                
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="Suiduckz nft back to top" />
                </a>
                <div className="bottom_footer_right">
                <p><a href="/terms" target="_blank"><u>Terms and Conditions</u></a></p>
                <p className="disclaimer-text"><a href="/disclaimer" target="_blank"><u>Disclaimer</u></a></p>
                <p className="disclaimer-text"><a href="/Privacy-Policy-and-Cookies-Statement" target="_blank"><u>Privacy Policy and Cookies Statement</u></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
