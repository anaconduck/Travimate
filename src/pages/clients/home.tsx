import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"
import WebSlider from "../../section/clients/web-slider"

const HomePage = () => {

  let slides = [
    "https://wallpapercave.com/uwp/uwp4257810.png",
    "https://wallpapercave.com/uwp/uwp4257807.png",
  ];

  return (
    <LayoutClient>
        <Hero />
        <div className="w-[79%] m-auto pt-12">
          <WebSlider slides={slides} />
        </div>
        <WhyUs />
        <DownloadApp />
    </LayoutClient>
  )
}

export default HomePage