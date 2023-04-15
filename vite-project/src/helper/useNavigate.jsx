import { useNavigate } from "react-router-dom";
 export let instance=useNavigate();
 export const navigate=(param)=>{
    instance(param);
 };