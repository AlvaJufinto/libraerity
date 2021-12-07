import NavbarProfile from "../navbarProfile/NavbarProfile";
// import Review from '../../components/Review/Review';
import Footer from "../footer/Footer";
import style from "../../styles/NewProfile.module.css";
import Link from "next/link";
import Review from "./profileCard/ProfileReview"
// import Avatar from "../../img/avatar/1.png";

function DisplayCardPost({data,owner}){
    if(data == false){
        return <h2 className={style.noData}>Oops! <br/> No data to be displayed</h2>
    }else{
        return data.map((val)=>{
            return <Review key={val.id} dataDocument={val} owner={owner}/>
        })
    }
}


const Profile = ({user,post}) => {
    return ( 
        <>
            <NavbarProfile />
            <div className={style.ProfileContainer}>
                <div className={style.ProfileBackground}>
                    <div className={style.ProfileTopGreen}></div>
                    <div className={style.ProfileBottomWhite}></div>
                </div>

                <div className={style.ProfileContent}>
                    <div className={style.ProfileIdentityContainer}>
                        <img className={style.ProfileImage} src={`/Assets/Avatar/${user.data.avatar}`} />
                        <div className={style.ProfileIdentity}>
                            <div className={style.NameWrapper}>
                                <h3 className={style.ProfileUsername}>
                                        {user.data.username}
                                </h3>
                            </div>
                            <p className={style.ProfileReviewCount}>{user.data.post.length} {user.data.post.length <=1 ? "review" : "reviews"}</p>
                            <div className={style.ProfileDescription}>
                                {user.data.description}
                            </div>
                                <a 
                                    href={`${user.data.websitelink}`} className={style.webLink}
                                    target="blank">
                                    Get in Touch
                                </a>
                        </div>
                    </div>

                    <h2 className={style.ProfileReviewContainerTitle}>Post</h2>
                    <div className={style.ProfileReviewContainer}>
                        <DisplayCardPost data={post} owner={user}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Profile;