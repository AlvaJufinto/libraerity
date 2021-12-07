import Person from "../person/Person";
import Navbar from "../newNavbar/Navbar";
import Footer from "../footer/Footer"
import style from "../../styles/People.module.css";
import {useState} from "react"

function SearchData({data}){
    if(data.length == 0){
        return <div className={style.Nodatawrap}>
            <h2 className={style.NodataText}>Oops ! <br />no data to be displayed</h2>
        </div>
    }else{
        return (<div className={style.PeopleProfileContainer}>
            {
                data.map((val)=>{
                    return <Person each={val} key={val.id}/>;
                })
            }
        </div>)
    }
}

const People = ({peoples}) => {
    const [data,setData] = useState(peoples);
    const getInput = (e) => { 
        let newData = peoples.filter((val) => {
            return val.data.username.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setData(newData);
    }
    return ( 
        <div className={style.PeopleStyled}>
            <Navbar />
                <div className={style.PeopleContainer}>
                    <div className={style.PeopleTitleContainer}>
                        <h2 className={style.PeopleTitle}>People</h2>
                        <div className={style.PeopleTitleUnderline}></div> 
                    </div>
                    <div className={style.PeopleDescriptionContainer}>
                        <p className={style.PeopleTopDescription}>
                            /People
                        </p>
                        <p className={style.PeopleBottomDescription}>
                            Where you can know more about people like you.   
                        </p>
                    </div>
                    <div className={style.PeopleSubmmitContainer}>
                        <div className={style.PeopleSearchContainer}>
                            <i 
                                className="fas fa-search" 
                                style={{
                                    color: "#188079",
                                    fontSize: '1.5rem',
                                    margin: "0 10px 0 5px"
                                }}></i>
                            <input className={style.PeopleSearchInput} placeholder="Type here..." onChange={function(e){getInput(e)}}/>
                        </div>
                    </div>
                    <SearchData data={data} />
                    {/* <div className={style.PeopleProfileContainer}>
                        {
                            data.map((val)=>{
                                return <Person each={val} key={val.id}/>;
                            })
                        }
                    </div> */}
                    <div className={style.PeopleQuoteContainer}>
                        <div className={style.PeopleQuoteText}>
                            <i 
                                className="fas fa-quote-right" 
                                style={{
                                    fontSize: '2rem',
                                    transform: "rotate(180deg)",
                                    margin: '0px 10px 0px 0',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '-5%',
                            }}></i>
                            A people without the knowledge of their past history, origin, and culture is like a tree without roots.
                        </div>
                        <div className={style.PeopleQuoteWriter}>
                            Marcus Garvey
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
     );
}
 
export default People;