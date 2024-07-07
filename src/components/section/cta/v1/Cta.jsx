import { FaDiscord } from "react-icons/fa";
import SectionTitle from "../../../../common/sectionTitle";
import Button from "../../../../common/button";
import data from "../../../../assets/data/socialProfile";

import hoverShape from "../../../../assets/images/icon/hov_shape_s.svg";
import particleShape1 from "../../../../assets/images/icon/star_1.svg";
import particleShape2 from "../../../../assets/images/icon/star_2.svg";
import particleShape3 from "../../../../assets/images/icon/star_3.svg";
import particleShape4 from "../../../../assets/images/icon/star_4.svg";
import particleShape5 from "../../../../assets/images/icon/star_5.svg";
import particleShape6 from "../../../../assets/images/icon/star_6.svg";
import particleShape7 from "../../../../assets/images/icon/star_7.svg";

import CTAStyleWrapper from "./Cta.style";

const CTA = () => {
  const particleShapes = [
    particleShape6,
    particleShape3,
    particleShape1,
    particleShape7,
    particleShape4,
    particleShape2,
    particleShape5,
  ];
  return (
    <CTAStyleWrapper className="cta_wrapper_v1">
      <div className="container">
        <SectionTitle
          className="suiduckz_title_section text-center"
          title="Join Our community"
        />
        
        <div className="suiduckz_v1_cta_content">
          <div className="join_comunity_btns">
            <a href="https://discord.com/invite/uJJ8kkHKpp" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="blue" className="join_discord_btn" >
              {" "}
              <FaDiscord /> Join Discord
            </Button>
            </a>
          </div>
          <div className="cta_social_links">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>
                    {item.thumb ? (
                      <img src={item.thumb} alt="SuiDuckz nft profiles" />
                    ) : (
                      item.icon
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
