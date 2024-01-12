import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import WhyUs from "../../section/clients/why-us"

const HomePage = () => {
  return (
    <LayoutClient>
        <Hero/>
        <WhyUs/>
    </LayoutClient>
  )
}

export default HomePage