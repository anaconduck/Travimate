import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"
import WebSlider from "../../section/clients/web-slider"
import InputField from  "../../components/layout-clients/part/inputfield"
import Slide1 from "../../assets/slide111.png"
import Slide2 from "../../assets/slide112.png"
import Slide3 from "../../assets/slide113.png"

const HomePage = () => {

  let slides = [
    Slide1,
    Slide2,
    Slide3,
  ];

  return (
    <LayoutClient>
        <Hero />
        <InputField/>
        <div className="w-[79%] m-auto pt-12">
          <WebSlider slides={slides} />
        </div>
        <WhyUs />
        <DownloadApp />
    </LayoutClient>
  )
}

export default HomePage