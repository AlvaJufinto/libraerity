import {useRouter} from "next/router";
import {useState,useEffect} from "react";
import {firebase} from "../../../utils/firebase";
import { collection, doc, getDoc, getFirestore,query, where,getDocs } from "firebase/firestore";

import Loading from "../../../Components/initLoading/InitLoading";
import Profile from "../../../Components/newProfile/Profile";
import NotFound from "../../../Components/ShowError/NotFound"
export default function UserandPost(){
    const [isLoading,setIsLoading] = useState(true);
    const [userCred,setUserCred] = useState(null);
    const [userPost,setUserPost] = useState(null);
    const [error,setError] = useState(false)
    const router = useRouter();
    const routerQuery = router.query
    const {userId} = routerQuery
    useEffect(()=>{
        if(userId != undefined){
            async function getuserCred(id){
                try{
                    const db = getFirestore();
                    const userRef = doc(db,"users",id);
                    const docSnap = await getDoc(userRef);
                    if(docSnap.exists()){
                        const dataUser = {
                            id : await docSnap.id,
                            data : await docSnap.data()
                        };
                        if(dataUser.data.post.length != 0){
                            const queryPost = query(collection(db,"posts"),where("creator","==",dataUser.id))
                            const posts = await getDocs(queryPost);
                            const userPosts = []
                            posts.forEach((doc)=>{
                                userPosts.push({
                                    id : doc.id,
                                    post : doc.data()
                                })
                            })
                            setUserPost(userPosts)
                            setUserCred(dataUser);
                        }else{
                            setUserPost(false)
                            setUserCred(dataUser);
                        }
                        setIsLoading(false);
                    }else{
                        setError(true)
                        setIsLoading(false)
                    }
                }catch(Err){
                    router.push("/dboff");
                }
            }
            getuserCred(userId)
        }
    },[userId])
    if(isLoading){
        return <Loading />
    }else{
        if(error){
            return <NotFound title={"User Not Found"} MessageTitle={"We Don't Have This user In Our Database"} pathBack={"/people"}/>
        }else{
            return <Profile user={userCred} post={userPost} />
        }
    }
    // if(!isLoading){
    //     return <Profile user={userCred} post={userPost} />
    // }
    // return <Loading />
}