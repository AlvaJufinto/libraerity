// import { useState } from "react";
import style from "../../styles/Review.module.css"
// import Avatar from "../../img/avatar/1.png"; 
import Link from "next/link"
// import "./Review.css";

const Review = ({ dataDocument,owner }) => {
    return (  
        <>
            <div className={style.ReviewStyled}>
                    <img className={style.TopReviewImage} src={dataDocument.post.mediaCover == null ? "Assets/logo/ifnull.png" : dataDocument.post.mediaCover} />
                    <div className={style.CenterReview} >
                        <p className={style.ReviewTitle}>{dataDocument.post.postTitle.length < 52 ? dataDocument.post.postTitle : dataDocument.post.postTitle.slice(0,51) + "..."}</p>
                        <p className={style.ReviewSourceTitle}>{dataDocument.post.sourceTitle}</p>
                        <p className={style.ReviewSourceAuthor}>{dataDocument.post.mediaAuthor}</p>
                        <br />
                        {/* <span className={style.ReviewCategory}>{dataDocument.post.category}</span> */}
                    </div>
                    <div className={style.BottomReview} style={{
                        borderBottom : "1px solid #188079"
                    }}>
                        <Link href={`library/${dataDocument.id}`}>
                            <a style={{
                                color : "#188079",
                                textDecoration: "underline"
                            }}
                            >Review Detail</a>
                        </Link>
                        <span className={style.ReviewCategory}>{dataDocument.post.category}</span>
                    </div>
                <div style={{
                    width: '100%',
                    alignSelf: 'center',
                    border: `1px solid #EEEEEE`,
                    background: "#FFFFFF",
                }} >
                <Link href={`/people/${dataDocument.post.creator}`}>
                    <a className={style.ReviewUserProfile} >
                        <img className={style.ReviewUserProfileImage} src={`/Assets/Avatar/${owner.avatar}`} alt="cover" />
                        <p className={style.ReviewUserProfileUsername}>{owner.username}</p>
                    </a>
                </Link>
                </div>
            </div>
        </>
    );
}
 
export default Review;