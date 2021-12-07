import Navbar from "../newNavbar/Navbar";
import Review from "../review/Review";
import style from "../../styles/Library.module.css";
import {useState} from "react";
import Footer from "../../Components/footer/Footer";


function LoopData({displayData,query,owner}){
    let display = displayData.filter((e) => e.post.postTitle.includes(query) 
        || e.post.mediaSource.includes(query)
        || e.post.mediaAuthor.includes(query))    
    if(display.length == 0){
        return (
            <div className={style.noData}>
                <h1 className={style.noDataText}>oops!<br/>no data to be displayed</h1>
            </div>
        )
    }
    return(
        <>
            <div className={style.LibraryReviewContainer}>
                {display.map((val)=>{
                    return <Review key={val.id} dataDocument={val} owner={owner[val.post.creator]}/>
                })}
            </div>
        </>
    )
}
const Library = ({loopData,dataCreator}) => {
    const [toBeDisplayed,setTobeDisplayed] = useState(loopData);
    const [searchBar,setSearchBar] = useState("");
    // const [filter,setFilter] = useState("");
    function changeHandler(e){
        setSearchBar(e.target.value);
    }
    function changeCategory(e){
        if(e.target.value == "all"){
            setTobeDisplayed(loopData);
        }else{
            let newData = loopData.filter((val)=> val.post.category == e.target.value);
            setTobeDisplayed(newData)
        }
        // console.log(e.target.value)
    }
    return ( 
        <>
            <Navbar />
            <div className={style.fullWrapper}>

                <div className={style.LibraryStyled}>
                        <div className={style.LibraryContainer}>
                            <div className={style.LibraryTitleContainer}>
                                <h2 className={style.LibraryTitle}>Libraerity</h2>
                                <div className={style.LibraryTitleUnderline}></div> 
                            </div>
                            <div className={style.LibraryDescriptionContainer}>
                                <p className={style.LibraryTopDescription}>
                                    /library
                                </p>
                                <p className={style.LibraryBottomDescription}>
                                    Where you can find unlimited resources and knowledges
                                </p>
                            </div>
                            <div className={style.LibrarySubmmitContainer}>
                                <div className={style.LibrarySearchContainer}>
                                    <i 
                                        className="fas fa-search" 
                                        style={{
                                            color: "#188079",
                                            fontSize: '1.5rem',
                                            margin: "0 10px 0 5px"
                                        }}></i>
                                    <input className={style.LibrarySearchInput} placeholder="Type here..." onChange={(e)=>{changeHandler(e)}}/>
                                </div>
                                <div className={style.FilterContainer}>
                                    <select className={style.LibraryFilterSelect} name="category" onChange={(e)=>{changeCategory(e)}}>;
                                        <option className={style.LibraryFilterOption} value="all" >all</option>
                                        <option className={style.LibraryFilterOption} value="programming">programming</option>
                                        <option className={style.LibraryFilterOption} value="life">life</option>
                                        <option className={style.LibraryFilterOption} value="school">school</option>
                                    </select>
                                </div>
                            </div>
                            <LoopData displayData={toBeDisplayed} query={searchBar} owner={dataCreator}/>
                            <div className={style.LibraryReviewContainer}>
                            </div>
                                {/* {
                                    toBeDisplayed.filter((e) => e.post.postTitle.includes(searchBar) 
                                    || e.post.mediaSource.includes(searchBar)
                                    || e.post.mediaAuthor.includes(searchBar)).map((val)=>{
                                        return <Review dataDocument={val} key={val.id} owner={val.id} />
                                    })
                                } */}
                                {/* <Review isUserReview={true} />
                                <Review isUserReview={true} />
                                <Review isUserReview={true} /> */}
                            <div className={style.LibraryQuoteContainer}>
                                <div className={style.LibraryQuoteText}>
                                    <i 
                                        className="fas fa-quote-right" 
                                        style={{
                                            fontSize: '2rem',
                                            transform: "rotate(180deg)",
                                            margin: '0px 10px 0px 0',
                                    }}></i>
                                    The crown of literature is poetry.
                                </div>
                                <div className={style.LibraryQuoteWriter}>
                                    William Somerset
                                </div>
                            </div>
                        </div>
                </div>
            <Footer />
            </div>
        </>
     );
}
 
export default Library;