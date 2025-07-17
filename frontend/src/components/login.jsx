import { useState } from "react";
import Loginsucess from "./loginSucessful";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Login(){
const [email,useEmail]=useState('');
const [password,userPassword]=useState('')
const [error,useError]=useState('');
const navigate=useNavigate();

  async function handle(e){
    e.preventDefault()
    useError(' ')
        try{
const api=await fetch('http://localhost:5005/api/auth/login',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
});
const data=await api.json()
if(data.ok){
   toast.success("Login successful ✅");
    
}
else{
    alert("invalid username or password")
    useError("Invalid email or password")
    useEmail('')
    userPassword('')
}
}
        catch(error){
            alert("An error occurred during login");
            useError("servor error!due to techniqnical issue")
               useEmail('')
    userPassword('')
        }
        }
    
return(
    <>

    <div className="align-items-center justify-content-center d-flex vh-100 ">
        <div className="bg-dark p-5 rounded shadow">
 <form onSubmit={handle}>
    <div className="mb-4 ">
 <label className="form-label text-white"><h4>Email :</h4></label>
 <input type="text" id="username" name="username" className="form-control" placeholder="Username" onChange={(e)=>{useEmail(e.target.value
 )}}/>
    </div>
    <div className="mb-4 ">
         <label className="form-label text-white"><h4>Password:</h4></label>
    <input type="text" id="userPasword" name="userPassword" placeholder="UserPassword" className="form-control"onChange={(e)=>{userPassword(e.target.value)}}/>

    </div>

<div>
 <button type="submit" className="btn btn-success w-100 mt-4">Login</button>
</div>
   
    </form>
    </div>
    </div>
    
 
   {
    error && <p style={{color:"red",fontSize:"20px",paddingLeft:"10px"}}>{error}</p>
   }
     </>
)
}
export default Login
