import {useState,useEffect} from "react";
import {firebase} from "../../utils/firebase";                                                                                                                                                                              
import {getDocs,collection, getFirestore} from "firebase/firestore";
import People from "../../Components/people/People";
import Loader from "../../Components/initLoading/InitLoading";
import {useRouter} from "next/router"
export default function ShowUser(){
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(true);
    const [userData,setUserData] = useState(null);
    useEffect(()=>{
        async function getUserCredential(){
            try{
                const arrayData = []                                           
                const db = getFirestore()
                const queryUser = await getDocs(collection(db,"users"));
                queryUser.forEach((val)=>{
                    arrayData.push({                                                                                                    
                        id : val.id,
                        data : val.data()
                    })
                })
                setUserData(arrayData);
                setIsLoading(false);
            }catch(Err){
                router.push("/dboff")
            }
        }
        getUserCredential()
    },[])
    if(!isLoading){
        return <People peoples={userData} />;
    }
    return <Loader />
}