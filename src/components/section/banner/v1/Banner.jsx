import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import characterThumb from "../../../../assets/images/nft/Character1.png";


const Banner = () => {

  const handleButtonClick = () => {
    
    const urlToOpen = 'https://www.tradeport.xyz/sui/collection/suiduckz?bottomTab=trades&tab=items';
    
    
    window.open(urlToOpen, '_blank');
  };
 
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="suiduckz_v1_baner_left">
              <h2 className="suiduckz-font">SuiDUckz NFT</h2> <h2>Listed ON</h2>
              <h3>
              <img src="https://www.tradeport.xyz/tradeport-logo.svg" alt="Tradeport" width="300" height="300" />
              </h3>
              <div className="banner_buttons">
               <Button size="lg" variant="mint" className="button_color" onClick={() => handleButtonClick()}>
                  {" "}
                  Trade Now
                </Button>
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="suiduckz_v1_baner_right">
              <div className="suiduckz_v1_baner_right_img_sect">
                <div className="suiduckz_v1_baner_right_img_bg">
                </div>
                <div className="suiduckz_v1_baner_right_img">
                  <img src={characterThumb} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
