import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({chilren}) => {
    return ( 
        <>
           <Navbar/>
           {chilren}
           <Footer/> 
        </>
     );
}
 
export default Layout;