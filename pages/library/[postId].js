import {useRouter} from "next/router";
import {firebase} from "../../utils/firebase"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

import NotFound from "../../Components/ShowError/NotFound";
import Loading from "../../Components/initLoading/InitLoading";
import LibraryViewReview from "../../Components/newlibrev/LibraryViewReview";
export default function PostDetail(){
    const [isLoading,setisLoading] = useState(true);
    const [data,setData] = useState(null)
    const [owner,setOwner] = useState(null);
    const [error,setError] = useState(false)
    const router = useRouter();
    const {postId} = router.query;
    useEffect(()=>{
        async function getPostData(postId){
            try{
                const db = getFirestore();
                const docRef = doc(db, "posts", postId);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    const dataPost = docSnap.data();

                    const ownerRef = doc(db,"users",dataPost.creator);
                    const ownerSnap = await getDoc(ownerRef);

                    setData(dataPost);
                    setOwner({
                        id : ownerSnap.id,
                        data :ownerSnap.data()
                    });
                    setisLoading(false)
                }else{
                    setError(true);
                    setisLoading(false);
                }
            }catch(Err){
                router.push("/dboff")
            }
        }
        if(postId != undefined){
            getPostData(postId);
        }
    },[postId])
    if(isLoading){
        return <Loading />
    }else{
        if(error){
            return <NotFound title={"Not Found"} MessageTitle={"We Can't Find The Data That You Are Looking For"} pathBack={"/library"} />
        }else{
            return <LibraryViewReview data={data} owner={owner} />
        }
    }
    // if(!isLoading){
    //     return <LibraryViewReview data={data} owner={owner} />
    // }
    // return <Loading />
}
