import {firebase} from "../../utils/firebase";
import { collection, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
import Library from "../../Components/library/Library";
import {useState,useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import Loading from "../../Components/initLoading/InitLoading";

export default function DisplayData(){
    const [isLoading,setIsLoading] = useState(true);
    const [libraryDatas,setLibraryDatas] = useState(null);
    const [allUser,setallUser] = useState(null)
    const router = useRouter();
    useEffect(()=>{
        async function fetchDataFromFirebase(){
            try{
                const db = getFirestore()
                let dataPosts = []
                const querySnapshot = await getDocs(collection(db,"posts"));
                querySnapshot.forEach((val)=>{
                    dataPosts.push({
                        id : val.id,
                        post : val.data()
                    })
                })
                const users = {};
                const userSnapshot = await getDocs(collection(db,"users"));
                userSnapshot.forEach((userval)=>{
                    users[userval.id] = userval.data();
                })
                setallUser(users);
                setLibraryDatas(dataPosts)
                setIsLoading(false)
            }catch(Err){
                setallUser(false);
                setLibraryDatas(false);
                setIsLoading(false);
                router.push("/dboff")
            }
        }
        fetchDataFromFirebase();
    },[]);
    if(!isLoading){
        if(libraryDatas !== false && allUser !== false){
            return <Library loopData={libraryDatas} dataCreator={allUser}/>
        }
    }
    return <><Loading /></>

}