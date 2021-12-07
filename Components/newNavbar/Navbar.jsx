import { useState, useEffect } from "react";

// import "./Navbar.css";

// import Avatar from "../../img/avatar/1.png";
// import Logo from "../../img/logo/logo.ico";
import Link from "next/link"
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExtended, setIsExtended] = useState(false);

    useEffect(() => {
        if(isVisible) {
            setIsExtended(true)
        }
    }, [isVisible, isExtended]);


    return (
        <>
            <div className="NavbarStyled">
                <a className='NavbarTitle' href="/">
                    <img className="NavbarLogo" src="/Assets/logo/logo.ico"></img>
                    Libraerity
                </a>
                <div className='NavbarCenter'>
                    <div className="NavbarLinkContainer">
                        <Link href="/">
                            <a className="NavbarLink" >
                                home
                            </a>
                        </Link>
                        <Link href="/library">
                            <a className="NavbarLink" >
                                library
                            </a>
                        </Link>
                        <Link href="/people">
                            <a className="NavbarLink" >
                                people
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="NavbarLink" >
                                about
                            </a>
                        </Link>
                    </div>
                </div>
                <div 
                    className={`NavbarMenubar ${isExtended ? "isExtended" : ""}`}
                    onClick={() => {
                    setIsExtended(!isExtended);
                    setIsVisible(false);
                }} >
                    <div className={`NavbarMenubar1 ${isExtended ? "isExtended" : ""}`}></div>
                    <div className={`NavbarMenubar2 ${isExtended ? "isExtended" : ""}`}></div>
                    <div className={`NavbarMenubar3 ${isExtended ? "isExtended" : ""}`}></div>
                </div>
            </div>
            <div className={`NavbarExtended ${isExtended ? "isExtended" : ""}`}>
                <a className={`NavbarLink ${isExtended ? "isExtended" : ""}`} href="/" >
                    Home
                </a>
                <a className={`NavbarLink ${isExtended ? "isExtended" : ""}`} href="/library">
                    Library
                </a>
                <a className={`NavbarLink ${isExtended ? "isExtended" : ""}`} href="/people">
                    People
                </a>
                <a className={`NavbarLink ${isExtended ? "isExtended" : ""}`} href="/about">
                    About Us
                </a>
            </div>
        </>
     );
}
 
export default Navbar;
