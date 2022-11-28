import HomeBannerMini from "./HomeBannerMini";
import { Banner as BannerImages } from "../../assets";

import './HomeBanner.scss'

function HomeBanner() {
  return (
    <div>
      <HomeBannerMini
        title="NEW ARRIVALS"
        className="Home_bannerMini"
        src1={BannerImages.line}
        src2={BannerImages.mini}
      />
      <HomeBannerMini
        title="STORE SYSTEM"
        className="Home_storeSystem"
        src1={BannerImages.line}
        src2={BannerImages.system}
      />
    </div>
  );
}

export default HomeBanner;
