import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"
import WebSlider from "../../section/clients/web-slider"

const HomePage = () => {

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <LayoutClient>
        <Hero />
        <div className="w-[80%] m-auto pt-11">
          <WebSlider slides={slides} />
        </div>
        <WhyUs />
        <DownloadApp />
    </LayoutClient>
  )
}

export default HomePage