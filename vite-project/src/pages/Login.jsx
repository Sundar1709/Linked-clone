import React,{useEffect, useState} from "react";
import LoginComponent from "../components/loginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loader from "../components/common/loader";
import{ auth } from "../firebaseConfig";
export default function Login(){
    const [loading,setLoading]=useState(true);
    let navigate=useNavigate();
    useEffect(()=>{onAuthStateChanged(auth,(res)=>{if(res?.accessToken){
        //navigate("/home");
    }
    else{
        return<loader />;
    }});},[]);
    return <LoginComponent />;
    }