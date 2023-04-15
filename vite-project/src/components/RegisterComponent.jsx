import React, { useState } from "react";
import { LoginApi,RegisterApi,GoogleApi } from "../api/AuthApi";
import '../Sass/LoginComponent.scss';
import logo from '../assets/logo.png';
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent(){
    let navigate=useNavigate();
    const [credentials,setCredentials]=useState({});
    const login = async() =>{
       try{
       let res= await RegisterApi(credentials.email,credentials.password);
       toast.success("Account created");
       navigate("/home");
       }catch(err){
        toast.error("can not create your account");
       }
    };
    const googleSignIn = () =>{
        let res=GoogleApi();
        navigate("/home");
    }
    return(
        <div className="login-wrapper">
            <img src={logo} className="Logo"  alt="linkedin"/>
            <h1 className="heading">Make the most of your professional life</h1>
            <div className="auth-inputs">
                <input onChange={(event) => setCredentials
                ({...credentials,email:event
                .target.value})}
                type="email" 
                className="common-input"
                placeholder="Email or phone number" />
                <input
                onChange={(event) =>
                setCredentials({...credentials,password:event.target.value})}
                type="password"
                className="common-input"
                placeholder="Password (6 or more characters)" />
            </div>
            <button onClick={login} className="login-btn">Agree & Join</button>
            <hr className="hr-text" data-content="or"></hr>
            <div className="ggl-btn-container">
            <GoogleButton className="ggl-btn"
  onClick={googleSignIn}
/>
<p className="sign-up">Already on LinkedIn?<span className="join-now" onClick={()=> navigate("/")}>Sign in</span>
</p>
</div>

        </div> 
    );
}