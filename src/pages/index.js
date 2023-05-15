
import BannerComponent from "@/components/banner-component"
import Navbar from "../components/navbar-component"
import FeaturesComponent from "@/components/features-component"
import CategroyComponent from "@/components/category-component"
import ProductsComponent from "@/components/products-component"
import SecondBannerComponent from "@/components/Secondbanner-component"
import SubscribeComponent from "@/components/subscribe-component"
import FooterComponent from "@/components/footer-component"

export default function Home() {
  return <>
    <Navbar />
    <BannerComponent />
    <FeaturesComponent />
    <CategroyComponent />
    <ProductsComponent />
    <SecondBannerComponent />
    <SubscribeComponent />
    <FooterComponent />
  </>
}

// export const Home = () => {
//   return (<>
//     <Navbar />
//   </>)
// }