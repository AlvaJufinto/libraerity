import style from "../../styles/Footer.module.css"
const Footer = () => {
    return ( 
        <>
            <div className={style.FooterStyled}>
                <div className={style.FooterContainer}>
                    <h2 className={style.FooterTitle}>A place where you can...</h2>
                    <hr className={style.FooterLine} />
                    <div className={style.FooterLinkContainer}>
                        <a className={style.FooterLink} href="/">Home</a>
                        <a className={style.FooterLink} href="/">Library</a>
                        <a className={style.FooterLink} href="/">About</a>
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