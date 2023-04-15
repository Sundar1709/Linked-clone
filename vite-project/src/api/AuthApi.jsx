import {signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from "../firebaseConfig";
export const LoginApi = (email,password) => {
    try{
    let response=signInWithEmailAndPassword(auth,email,password);
    return response;
    }catch(err){
        return err;
    }
};
export const RegisterApi = (email,password) => {
    try{
    let response=createUserWithEmailAndPassword(auth,email,password);
    return response;
    }catch(err){
        return err;
    }
};
export const GoogleApi = () => {
    try{
    let gp=new GoogleAuthProvider();
    let response=signInWithPopup(auth, gp);
    return response;
    }catch(err){
        return err;
    }
};