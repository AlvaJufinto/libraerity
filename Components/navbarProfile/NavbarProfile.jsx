import { useState, useEffect } from "react";
import Link from "next/link"
import style from "../../styles/NavbarProfile.module.css";

const NavbarProfile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExtended, setIsExtended] = useState(false);

    useEffect(() => {
        if(isVisible) {
            setIsExtended(true)
        }
    }, [isVisible, isExtended]);


    return (
        <>
            <div className={style.NavbarProfileStyled}>
                <Link href="/people">
                    <a className={style.NavbarProfileGoBackContainer}>
                        <i className="fas fa-chevron-left"></i>
                        &nbsp;Go Back
                    </a>
                </Link>

                <p className={`${style.NavbarProfileTitle} ${style.Center}`}>Profile</p>
                <p className={`${style.NavbarProfileTitle} ${style.Right}`}>Profile</p>
            </div>
        </>
     );
}
 
export default NavbarProfile;
