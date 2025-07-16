import { useEffect, useState } from "react"

function Register(){
    const [email,setEmail]=useState('');
    const[password,usePass]=useState('');
  async function handle(e){
e.preventDefault();

console.log(email,password);
try{
const api=await fetch('http://localhost:5005/api/auth/register',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
});
const res= await api.json();
console.log("Server Response:", res);

// Show whatever field is available
alert(res.message || res.msg || "No message returned from server");

}
catch(error){
    console.log("while api error");
}

}
    
    return(
      <>
      <form onSubmit={handle}>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>
<input value={password} onChange={e=>usePass(e.target.value)} type="password" placeholder="Password"/>
<button disabled={!email || !password}>Submit</button>
      </form>


      </>
    )
}
export default Register