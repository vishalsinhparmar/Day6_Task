import { Outlet } from "react-router-dom";
import NavbarApp from "./NavbarApp";
import Contact from "./Contact";
import '../App.css'
import Footer from "./Footer";

const Layout = ()=>{
    return (
        <>
           <main>
            <NavbarApp/>
                <div>
                    <Outlet/>
                </div>
            <Footer/>
           </main>
        </>
    )
};

export default Layout;