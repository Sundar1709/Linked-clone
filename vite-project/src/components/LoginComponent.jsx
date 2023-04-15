import React, { useState } from "react";
import { LoginApi,RegisterApi,GoogleApi } from "../api/AuthApi";
import '../Sass/LoginComponent.scss';
import logo from '../assets/logo.png';
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function LoginComponent(){
    let navigate=useNavigate();
    const [credentials,setCredentials]=useState({});
    const login = async() =>{
       try{
       let res= await LoginApi(credentials.email,credentials.password);
       toast.success("Signed in successfully");
       navigate("/home");
       }catch(err){
        toast.error("Bad credenttials");
       }
    };
    const googleSignIn = () =>{
        let res=GoogleApi();
        navigate("/home");
    }
    return(
        <div className="login-wrapper">
             <img src={logo} className="Logo"  alt="linkedin"/>
            <h1 className="heading">Sign In</h1>
            <p className="sub-heading">Stay updated on your professional world</p>
            <div className="auth-inputs">
                <input onChange={(event) => setCredentials
                ({...credentials,email:event
                .target.value})}
                type="email" 
                className="common-input"
                placeholder="Email or Phone" />
                <input
                onChange={(event) =>
                setCredentials({...credentials,password:event.target.value})}
                type="password"
                className="common-input"
                placeholder="Password" />
            </div>
            <button onClick={login} className="login-btn">Sign in</button>
            <hr className="hr-text" data-content="or"></hr>
            <div className="ggl-btn-container">
            <GoogleButton className="ggl-btn"
  onClick={googleSignIn}
/>
<p className="sign-up">New to LinkedIn?<span className="join-now" onClick={()=> navigate("/register")}>Join now</span>
</p>
</div>

        </div> 
    );
}