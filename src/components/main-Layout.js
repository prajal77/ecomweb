import FooterComponent from "./footer-component";
import Navbar from "./navbar-component";

const MainLayout = ({ children }) => {
    return <>
        <Navbar />
        {children}
        <FooterComponent />
    </>
}
export default MainLayout;