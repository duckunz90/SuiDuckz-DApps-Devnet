import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import Particle from "./Particles";
import characterThumb from "../../../../assets/images/nft/Biometric8.png";
import launchmynftIcon from "../../../../assets/images/icon/LaunchMyNFT2.svg"


const Banner = () => {

  const handleButtonClick = () => {
    
    const urlToOpen = 'https://launchmynft.io/collections/0xb4b02ff98a4bb82e4f226bb097800223fec953cfe367f91adffa39478119ea85/NXWBxMOfWhkXMsFunTjq';
    
    
    window.open(urlToOpen, '_blank');
  };
 
  return (
    <BannerV1Wrapper id="home">
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="suiduckz_v1_baner_left">
              <h2 className="suiduckz-font">SuiDUckz Eggs NFT</h2> <h2>Mint is Live </h2><h2>On</h2>
              <h3>
              <img src={launchmynftIcon} alt="LaunchMyNFT" width="300" height="300" />
              </h3>
              <div className="banner_buttons">
               <Button size="lg" variant="mint" className="button_color" onClick={() => handleButtonClick()}>
                  {" "}
                  Mint Now
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
