import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"

const HomePage = () => {
  return (
    <LayoutClient>
        <Hero />
        <WhyUs />
        <DownloadApp />
    </LayoutClient>
  )
}

export default HomePage