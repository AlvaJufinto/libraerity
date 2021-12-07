import {getApp, getApps, initializeApp,getFirestore} from "firebase/app";

const configFile = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

let firebase;

try{
   firebase =  getApps().length != 0 ? getApp() : initializeApp(configFile);
}catch(Err){
    console.log(Err);
}
export {firebase};