import { NavLink } from "react-router-dom";

const NavbarApp = ()=>{
     return (
        <>
            <header>
                  <nav className="Navabar-brand">
                    <div className="logo">
                       <NavLink to="/">VISHALSINH</NavLink>
                    </div>
                       <ul>                           
                                                   
                            <li ><NavLink to="/Home" className={({isActive})=>(isActive ? "active":"")} end>Home</NavLink></li>
                            <li><NavLink to="/About" className={({isActive})=>(isActive ? "active":"")}>About</NavLink></li>
                            <li><NavLink to="/Contact" className={({isActive})=>(isActive ? "active":"")}>Contact</NavLink></li>                           
                       </ul>
                  </nav>
            </header>
        </>
     )
};

export default NavbarApp;