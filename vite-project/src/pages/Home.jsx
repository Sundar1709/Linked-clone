import React,{useEffect} from "react";
import HomeComponent from "../components/HomeComponents"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loader from "../components/common/loader";
export default function Home() {
    let navigate=useNavigate();
    useEffect(()=>{onAuthStateChanged(auth,(res)=>{if(res?.accessToken){
        navigate("/");
    }
else{
    return<loader />;
}});},[]);
 return <HomeComponent />;
}