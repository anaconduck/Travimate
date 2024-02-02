import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"
import WebSlider from "../../section/clients/web-slider"

const HomePage = () => {
  return (
    <LayoutClient>
        <Hero />
        <WebSlider/>
        <DownloadApp />
        <WhyUs />
    </LayoutClient>
  )
}

export default HomePage