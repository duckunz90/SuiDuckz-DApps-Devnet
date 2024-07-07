import { ethos } from 'ethos-connect'
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import imgFrameShape from "../../../../assets/images/nft/6664.png";
import Particle from "./Particles"

const Banner = () => {
  const { mintModalHandle } = ethos.useWallet();

  const settings = {
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



  return (
    <BannerV1Wrapper id="home">
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="suiduckz_v1_baner_left">
              <div className="banner_title">
                <h2 className="circle_cat_foot">Welcome
                </h2>
                <h2>SuiDuckz Hunter</h2>
              </div>

              <div className="coin_info">
                <h4>Input your Code</h4>
                <h4>For Login</h4>
              </div>

              <div className="banner_buttons">
                <form>

                  <div className='form-group'>
                  <input type='password' id='code' name='code' placeholder="CODE HERE" required />
                  </div>

                </form>
                <Button size="lg" variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Quack
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="suiduckz_v4_baner_right">
              <div className="banner_card">
              <img src={imgFrameShape} alt="shape" />
              </div>
              {/* bg overlay */}
              <span className="bg_overlay">
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
