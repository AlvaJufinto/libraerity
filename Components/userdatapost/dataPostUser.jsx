import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector';
import Link from "next/link"

import Navbar from "../newNavbar/Navbar";
import Footer from "../footer/Footer";
import style from "../../styles/LibrevNew.module.css"
const LibraryViewReview = ({data}) => {
    const { height:contentHeight, ref:contentRef } = useResizeDetector();
    return ( 
        <>
            <Navbar />
            <div 
                className={style.LibraryViewReviewContainer}
                style={{
                    height: contentHeight+200,
                }}>
                <div className={style.LibraryViewReviewBackground}>
                    <div className={style.LibraryViewReviewTopGreen}></div>
                    <div className={style.LibraryViewReviewBottomWhite}></div>
                </div>
                <Link href={`/people/${data.creator}`}>
                    <a className={style.LibraryRouteBack}>
                        <i 
                            className="fas fa-chevron-left"
                            style={{
                                margin: '0 20px 0 0'
                            }}></i>
                        Go Back
                    </a>
                </Link>
                <div className={style.LibraryViewReviewContent} ref={contentRef}>
                    <img className={style.LibraryViewReviewImage} src={data.mediaCover == null ? "/Assets/logo/ifnull.png" : data.mediaCover} />

                    <div className={style.LibraryViewReviewDetail}>
                        <h1 className={style.LibraryViewReviewTitle}>{data.postTitle}</h1>
                        
                        <div className={style.LibraryViewReviewSourceIdentity}>
                            <h3 className={style.LibraryViewReviewSourceTitle}>{data.sourceTitle}</h3>
                            <p className={style.LibraryViewReviewSourceAuthor}>{data.mediaAuthor}</p>
                            <p className={style.LibraryViewReviewSourceDescription}>
                                {data.postDescription}
                            </p>
                            <span className={style.LibraryViewReviewCategory}>{data.category}</span>
                            <div className={style.LibraryViewReviewSourceContainer}>
                                Source : 
                                    <a 
                                        href={data.mediaSource}
                                        target="blank">
                                        Here
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
     );
}
 
export default LibraryViewReview;