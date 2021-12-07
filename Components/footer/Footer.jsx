import style from "../../styles/Footer.module.css"
import Link from "next/link";
const Footer = () => {
    return ( 
        <>
            <div className={style.FooterStyled}>
                <div className={style.FooterContainer}>
                    <h2 className={style.FooterTitle}>A place where you can...</h2>
                    <hr className={style.FooterLine} />
                    <div className={style.FooterLinkContainer}>
                        <Link href="/">
                            <a className={style.FooterLink} >Home</a>
                        </Link>
                        <Link href="/library">
                            <a className={style.FooterLink} >Library</a>
                        </Link>
                        <Link href="/about">
                            <a className={style.FooterLink} >About</a>
                        </Link>
                    </div>
                    <div className={style.FooterSocialContainer}>
                        <div className={style.FooterSocial}>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className={style.FooterSocial}>
                            <i className="fab fa-youtube"></i>
                        </div>
                        <div className={style.FooterSocial}>
                            <i className="far fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;