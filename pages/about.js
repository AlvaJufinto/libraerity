import AboutUsPage from "../Components/newAboutUs/AboutUs"
import Loading from "../Components/initLoading/InitLoading";
import { useState,useEffect } from "react";
export default function AboutUs(){
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
    return isLoading ? <Loading /> :<AboutUsPage />
}