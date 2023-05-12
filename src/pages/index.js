
import BannerComponent from "@/components/banner-component"
import Navbar from "../components/navbar-component"
import FeaturesComponent from "@/components/features-component"
import CategroyComponent from "@/components/category-component"
import ProductsComponent from "@/components/products-component"

export default function Home() {
  return <>
    <Navbar />
    <BannerComponent />
    <FeaturesComponent />
    {/* <CategroyComponent /> */}
    <ProductsComponent />
  </>
}

// export const Home = () => {
//   return (<>
//     <Navbar />
//   </>)
// }