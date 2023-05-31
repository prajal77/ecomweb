
import BannerComponent from "@/components/banner-component"
import FeaturesComponent from "@/components/features-component"
import CategroyComponent from "@/components/category-component"
import ProductsComponent from "@/components/products-component"
import SecondBannerComponent from "@/components/Secondbanner-component"
import SubscribeComponent from "@/components/subscribe-component"
import MainLayout from "@/components/main-Layout"
import LatestProducts from "@/components/latest-product-component"

export default function Home() {
  return <>
    <MainLayout>
      <BannerComponent />
      <FeaturesComponent />
      <CategroyComponent />
      <ProductsComponent />
      <SecondBannerComponent />
      <LatestProducts />
      <SubscribeComponent />
    </MainLayout>
  </>
}

// export const Home = () => {
//   return (<>
//     <Navbar />
//   </>)
// }