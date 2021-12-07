import {useRouter} from "next/router";
import {useState,useEffect} from "react";
import {firebase} from "../../../../utils/firebase";
import { getDoc,doc, getFirestore } from "firebase/firestore";

import LibraryViewReview from "../../../../Components/userdatapost/dataPostUser";
import Loading from "../../../../Components/initLoading/InitLoading"
import NotFound from "../../../../Components/ShowError/NotFound";

export default function PostFromUser(){
    const router = useRouter();
    const [dtnotfound,setdtnotfound] = useState(false);
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const {userId,postUserId} = router.query;
    useEffect(()=>{
        if(userId != undefined && postUserId != undefined){
            async function getData(userId,postUserid){
                try{
                    const db = getFirestore()
                    const docref = doc(db,"posts",postUserid)
                    const docSnap = await getDoc(docref);
                    if(docSnap.exists()){
                        const datapost = await docSnap.data();
                        if(datapost.creator == userId){
                            setData(datapost);
                            setIsLoading(false)
                        }else{
                            setdtnotfound(true);
                            setIsLoading(false);    
                        }
                    }else{
                        setdtnotfound(true);
                        setIsLoading(false);
                    }
                }catch(Err){
                    eouter.push("/dboff")
                }
            }
            getData(userId,postUserId);
        }
    },[userId,postUserId])

    if(isLoading){
        return <Loading />
    }else{
        if(dtnotfound){
            return <NotFound title={"Not Found"} MessageTitle={"We Cant Find The Data That You Are Looking For"} pathBack={`/people/${userId}`}/>
        }else{
            return <LibraryViewReview data={data} />
        }
    }
}