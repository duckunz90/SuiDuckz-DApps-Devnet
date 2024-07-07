import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";
import Particle from "./Particles";
import MintStyleWrapper from "./Mint.style";
import thumb1 from "../../../../assets/images/nft/1811.png";
import thumb2 from "../../../../assets/images/nft/1812.png";
import thumb3 from "../../../../assets/images/nft/3238.png";
import thumb4 from "../../../../assets/images/nft/3249.png";
import thumb5 from "../../../../assets/images/nft/3260.png";
import thumb6 from "../../../../assets/images/nft/3281.png";
import thumb7 from "../../../../assets/images/nft/3282.png";
import thumb8 from "../../../../assets/images/nft/3299.png";
import thumb9 from "../../../../assets/images/nft/3329.png";
import notionIcon from "../../../../assets/images/icon/Notion-logo.svg";
import launchmynftIcon from "../../../../assets/images/icon/launchmynft.svg";
import dotred from "../../../../assets/images/icon/dotred.png"

const Mint = () => {
  

  const slideImages = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9];
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChenge = () => { };

  return (
    <MintStyleWrapper>
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mint_left_content">
              <div className="mint_left_inner">
                <div className="mint_slider">
                  <Slider {...sliderSettings}>
                    {slideImages?.map((thumb, idx) => (
                      <SliderItem key={idx}>
                        <div className="mint_thumb">
                          <img src={thumb} alt="thumb" />
                        </div>
                      </SliderItem>
                    ))}
                  </Slider>
                </div>
                <ul className="mint_count_list">
                  <li>
                    <h5>Total Supply</h5>
                    <h5>
                      <span>3333</span>
                    </h5>
                  </li>
                </ul>
                <div className="mint_button">
                  <a href="https://launchmynft.io/collections/0xb4b02ff98a4bb82e4f226bb097800223fec953cfe367f91adffa39478119ea85/NXWBxMOfWhkXMsFunTjq" target="_blank">
                <Button size="lg" variant="mint" className="button_color" onClick={() => mintModalHandle()}>
                  {" "}
                  <img src={launchmynftIcon} alt="Launchmynft" className="launchmynft_logo" /> Mint now
                </Button></a>
                </div>
                <p>
                  By clicking “MINT”, You agree to our{" "}
                  <a href="/terms" target="_blank">Terms of Service</a> and our{" "}
                  <a href="/Privacy-Policy-and-Cookies-Statement" target="_blank">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mint_right_content">
              <div className="content_header">

                <h1>SUIDUCKZ EGGS NFT MINT IS LIVE <img src={dotred} className="dotred_icon"/> </h1>
              </div>
              <div className="content_footer">
                <h5>Public Mint = 3 SUI</h5>
              </div>
              <div className="mint_btns">
              <a href="https://suiduckz.notion.site/SuiDuckz-Eggs-NFT-Mint-Live-2bd904a2323b4352a21b8c9d41609126?pvs=4" target="_blank"><Button size="lg" variant="outline">
                  <img src={notionIcon} alt="icon" className="notionicon_logo" />
                  Detail Mint
                </Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
