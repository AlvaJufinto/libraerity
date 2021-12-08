import { useState } from "react";
import style from "../../styles/Person.module.css"
import Link from "next/link"
const Person = ({each}) => {
    return (  
        <>
                <div className={style.PersonStyled}>
                    <Link href={`/people/${each.id}`}>
                        <a className={style.tobeCentered}>
                        <div className={style.TopPersonImageContainer}>
                            <img className={style.TopPersonImage} src={`/Assets/Avatar/${each.data.avatar}`} />
                        </div>
                        <div className={style.CenterPerson}>
                            <p className={style.PersonUsername}>{each.data.username}</p>
                            <p className={style.PersonReviewCount}>{each.data.post.length <=1 ? `${each.data.post.length} Review` : `${each.data.post.length} Reviews`}</p>
                            <p className={style.PersonDescription}>
                                {each.data.description.length <= 58 ? each.data.description : `${each.data.description.slice(0,55)}...`}
                            </p>
                        </div>
                        </a>
                    </Link>
                </div>

        </>
    );
}
 
export default Person;